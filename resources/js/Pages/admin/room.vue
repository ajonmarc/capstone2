<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import { ref, onMounted, onBeforeUnmount, watch, defineProps } from "vue";
import InputError from "@/Components/InputError.vue";
import Swal from "sweetalert2";
import { useForm } from "@inertiajs/vue3";
import { Inertia } from "@inertiajs/inertia";

// Define props passed from the controller
const props = defineProps({
    rooms: Object,
    search: String,
});

// Reactive data for search query
const searchQuery = ref(props.search);

// Search function triggered by form submission
function search() {
    Inertia.get(
        route("admin.rooms"),
        { search: searchQuery.value },
        { preserveState: true }
    );
}

// Reset pagination when input is cleared
function handleInputChange() {
    if (searchQuery.value === "") {
        Inertia.get(route("admin.rooms"), {}, { preserveState: true });
    }
}

// Handle pagination click
function goToPage(url) {
    if (url) {
        Inertia.get(
            url,
            { search: searchQuery.value },
            { preserveState: true }
        );
    }
}

const isAddRoom = ref(false);
const dialogVisible = ref(false);
const currentRoom = ref(null); // track current doc

// add edit form
const form = useForm({
    room_number: "",
});

const openAddRoom = () => {
    isAddRoom.value = true;
    dialogVisible.value = true;
    form.reset();
};

// Open modal for editing
const openEditRoom = (room) => {
    isAddRoom.value = false;
    dialogVisible.value = true;
    currentRoom.value = room;

    // Pre-fill form
    form.room_number = room.room_number;
};

// Submit form (handles both add and edit)
const submit = () => {
    if (isAddRoom.value) {
        // Handle add user
        form.post(route("room.store"), {
            onSuccess: () => {
                closeModal();
                Swal.fire({
                    title: "Success!",
                    text: "Room has been created successfully.",
                    icon: "success",
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            },
        });
    } else {
        // Handle edit user
        form.patch(route("room.update", currentRoom.value.id), {
            onSuccess: () => {
                closeModal();
                Swal.fire({
                    title: "Success!",
                    text: "Room has been updated successfully.",
                    icon: "success",
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            },
        });
    }
};

const closeModal = () => {
    dialogVisible.value = false;
    form.reset();
    currentRoom.value = null;
};

// Delete Doctor
const deleteRoom = (room) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            // Perform the delete request
            form.delete(route("room.destroy", room.id), {
                onSuccess: () => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Room has been deleted.",
                        icon: "success",
                        toast: true,
                        position: "bottom-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                },
            });
        }
    });
};
</script>

<template>
    <Head title="Admin Dashboard" />

    <el-dialog
        v-model="dialogVisible"
        :title="isAddRoom ? 'Add Room' : 'Edit Room'"
        width="500"
        :before-close="handleClose"
    >
        <!--form start-->

        <form @submit.prevent="submit" class="max-w-md mx-auto">
            <div class="relative z-0 w-full mb-5 group">
                <input
                    id="room_number"
                    type="text"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    name="room_number"
                    v-model="form.room_number"
                    autofocus
                    autocomplete="room_number"
                    placeholder=" "
                />
                <InputError class="mt-1" :message="form.errors.room_number" />
                <label
                    for="room_number"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >room_number</label
                >
            </div>

            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >
                Submit
            </button>
        </form>
        <!--form end-->
    </el-dialog>

    <AdminLayout>
        <div class="py-5">
            <div class="w-full text-sm text-left text-gray-500 mb-2">ROOMS</div>
            <div class="bg-white -800 relative shadow-md sm:rounded-lg">
                <div
                    class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
                >
                    <div class="w-full md:w-1/2">
                        <form
                            @submit.prevent="search"
                            class="flex items-center"
                        >
                            <label for="simple-search" class="sr-only"
                                >Search</label
                            >
                            <div class="relative w-full">
                                <div
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="w-5 h-5 text-gray-500 text-gray-400"
                                        fill="currentColor"
                                        viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                                    placeholder="Search"
                                    required=""
                                    v-model="searchQuery"
                                    @input="handleInputChange"
                                />
                            </div>
                        </form>
                    </div>

                    <div
                        class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
                    >
                        <!-- Add User Button -->
                        <button
                            type="button"
                            @click="openAddRoom"
                            class="text-white ml-2 mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
                        >
                            Add Room
                        </button>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table
                        class="w-full text-sm text-left text-gray-500 text-gray-400"
                    >
                        <thead
                            class="text-xs text-gray-700 uppercase bg-gray-50"
                        >
                            <tr>
                                <th scope="col" class="px-4 py-3">
                                    ROOM NUMBER
                                </th>

                                <th scope="col" class="px-4 py-3">actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="rooms.data.length === 0">
                                <td
                                    colspan="5"
                                    class="text-center text-gray-500"
                                >
                                    Nothing found
                                </td>
                            </tr>
                            <tr
                                v-for="room in rooms.data"
                                :key="room.id"
                                class="border-b"
                            >
                                <td class="px-4 py-3">
                                    {{ room.room_number }}
                                </td>

                                <td class="px-4 py-3">
                                    <!-- Edit button -->
                                    <button
                                        @click="openEditRoom(room)"
                                        class="py-1 px-3 rounded ml-2 py-2 px-4"
                                    >
                                        <i
                                            class="fas fa-edit text-green-500"
                                        ></i>
                                    </button>

                                    <!-- Delete button -->
                                    <button
                                        @click="deleteRoom(room)"
                                        class="py-1 px-3 rounded ml-2 py-2 px-4"
                                    >
                                        <i
                                            class="fas fa-trash text-red-500"
                                        ></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- Pagination Links -->
                    <div v-if="rooms.links.length > 1">
                        <nav
                            class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                            aria-label="Table navigation"
                        >
                            <span
                                class="text-sm font-normal text-gray-500 text-gray-400"
                            >
                                Showing
                                <span class="font-semibold text-gray-900"
                                    >{{ rooms.from }}-{{ rooms.to }}</span
                                >
                                of
                                <span class="font-semibold text-gray-900">{{
                                    rooms.total
                                }}</span>
                            </span>
                            <ul class="inline-flex items-stretch -space-x-px">
                                <li
                                    v-for="(link, index) in rooms.links"
                                    :key="index"
                                >
                                    <a
                                        href="#"
                                        :class="[
                                            'flex items-center justify-center text-sm py-2 px-3 leading-tight border',
                                            link.active
                                                ? 'bg-primary-50 text-primary-600 border-primary-300 hover:bg-primary-100'
                                                : 'text-gray-500 bg-white border-gray-300 hover:-100 hover:text-gray-700',
                                        ]"
                                        v-html="link.label"
                                        @click.prevent="goToPage(link.url)"
                                    ></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
