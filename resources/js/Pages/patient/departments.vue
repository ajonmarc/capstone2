<script setup>
import PatientLayout from "@/Layouts/PatientLayout.vue";
import { ref } from "vue";

import { Head, Link, useForm } from "@inertiajs/vue3";

import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";

import NavLink from "@/Components/NavLink.vue";
import Departments from "../admin/departments.vue";



import { router } from '@inertiajs/vue3';

const goToDepartment = (departmentId) => {
    router.get(`/departments/${departmentId}`);
};

// Props
defineProps({
    headers: Array,
    footers: Array,
    departments: Array,

    bookCount: {
        type: Number,
        required: true,
    },
    
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

</script>

<template>
    <Head title="Patient Dashboard" />

    <header>
        <nav
            class="bg-white  fixed top-0 w-full z-50"
        >
            <div
                class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
            >
            <Link
                    v-for="header in headers"
                    :key="header.id"
                    :href="route('dashboard')"
                    class="flex items-center space-x-3 rtl:space-x-reverse" >
                    <img
                        :src="'/headerlogo/' + header.logo"
                        alt="Logo"
                        class="h-12 w-12 rounded-full"
                    />
                    <span
                            class="self-center text-2xl font-semibold whitespace-nowrap truncate hidden sm:block"
                        >
                            {{ header.title }}
                        </span>
                </Link>
                <div
                    class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
                >
                    <button
                        @click="toggleMenu"
                           class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200"
                        aria-controls="navbar-cta"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    <!-- Settings Dropdown -->
                    <Dropdown align="right" width="48">
                        <template #trigger>
                            <span class="inline-flex rounded-md">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white-500 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 hover:text-white-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    {{ $page.props.auth.user.name }}

                                    <svg
                                        class="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </template>

                        <template #content>
                            <DropdownLink :href="route('patient.profile')"
                                ><font-awesome-icon
                                    :icon="['fas', 'user']"
                                    class="me-2"
                                />Profile</DropdownLink
                            >
                            <DropdownLink
                                :href="route('logout')"
                                method="post"
                                as="button"
                                ><font-awesome-icon
                                    :icon="['fas', 'right-from-bracket']"
                                    class="me-2"
                                />Log Out</DropdownLink
                            >
                        </template>
                    </Dropdown>
                </div>
                <div
                    :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
                    class="items-center justify-between w-full md:flex md:w-auto md:order-1"
                    id="navbar-cta"
                >
                    <ul
                       class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
                    >
                        <li>
                            <NavLink
                                :href="route('dashboard')"
                                :active="route().current('dashboard')"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                :href="route('patient.about')"
                                :active="route().current('patient.about')"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                :href="route('patient.services')"
                                :active="route().current('patient.services')"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                :href="route('patient.departments')"
                                :active="route().current('patient.departments')"
                            >
                            Departments
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                :href="route('patient.doctors')"
                                :active="route().current('patient.doctors')"
                            >
                                Doctors
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                :href="route('patient.contact')"
                                :active="route().current('patient.contact')"
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                :href="route('patient.myappointment')"
                                :active="
                                    route().current('patient.myappointment')
                                "
                            >
                                My Appointment
                                <span
                                    v-if="bookCount > 0"
                                    class="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-sm"
                                >
                                    {{ bookCount }}
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <PatientLayout>
       
            <!-- Departments Section -->
          
        <section id="departments" class="bg-gray-50  py-28">
        <div class="max-w-screen-xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-gray-900  mb-8 text-center">
                Departments
            </h2>
            <p class="text-lg text-gray-600  mb-8 text-center">
                Our departments are staffed by experienced professionals
                dedicated to providing the best care in their fields.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                <div
                    v-for="department in departments"
                    :key="department.id"
                    @click="goToDepartment(department.id)"
                    class="bg-white  p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                >
                    <img
                        :src="'/departmentimage/' + department.imagedep"
                        alt="Logo"
                        class="w-full h-20 object-contain rounded mb-4"
                    />
                    <h3
                        class="text-xl font-semibold text-gray-900  mb-2 text-center"
                    >
                        {{ department.titledep }}
                    </h3>
                </div>
            </div>

        </div>
    </section>
    </PatientLayout>
      
    <footer
    v-for="footer in footers"
    :key="footer.id"
    class="bg-red-700 text-white py-6"
>
    <div class="max-w-screen-xl mx-auto px-16">
        <div class="flex justify-between items-center">
            <p class="text-sm">
                <i class="fas fa-copyright"></i> 2024 Surigao Health. All rights reserved.
            </p>
            <div class="space-x-4">
                <a href="#" class="text-white hover:underline">
                    <i class="fas fa-shield-alt me-1"></i> Privacy Policy
                </a>
                <a href="#" class="text-white hover:underline">
                    <i class="fas fa-file-alt me-1"></i> Terms of Service
                </a>
            </div>
        </div>
        <div class="flex justify-between items-center mt-4">
            <p class="text-sm">
                <i class="fas fa-phone-alt me-1"></i> Contact: {{ footer.contact }}
            </p>
            <p class="text-sm">
                <i class="fab fa-facebook me-1"></i>
                Facebook:
                <a href="#" class="hover:underline"> {{ footer.fbname }}</a>
            </p>
        </div>
        <div class="flex justify-between items-center mt-4">
            <p class="text-sm">
                <i class="fas fa-map-marker-alt me-1"></i> {{ footer.place }}
            </p>
        </div>
    </div>
</footer>
</template>
