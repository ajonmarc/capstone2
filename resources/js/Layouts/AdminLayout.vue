<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import { Link } from "@inertiajs/vue3";

const showingSidebar = ref(false);
</script>

<template>
    <div class="flex h-screen overflow-hidden bg-blue-100">
        <!-- Sidebar -->
        <aside
            :class="{
                '-translate-x-full': !showingSidebar,
                'translate-x-0': showingSidebar,
            }"
            class="transform top-0 left-0 w-64 bg-blue border-r border-blue-100 p-4 fixed h-full transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 overflow-y-auto bg-blue-100  z-50"
        >
            <div class="flex items-center justify-between mb-5">
                <Link
                    :href="route('admin.dashboard')"
                    class="flex items-center ps-2.5"
                >
                    <ApplicationLogo />

                    <span
                        class="self-center text-xl font-semibold whitespace-nowrap "
                        >S.H.S.I</span
                    >
                </Link>

                <!-- Close button for sidebar on mobile -->
                <button
                    @click="showingSidebar = false"
                    class="text-gray-500 hover:text-red-500 sm:hidden"
                >
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <ul class="space-y-2 font-medium">
    <li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.dashboard') }">
        <Link :href="route('admin.dashboard')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
            <span class="ms-3">
                <i class="fas fa-gauge me-2"></i>
                Dashboard
            </span>
        </Link>
    </li>

    <li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.schedule') }">
        <Link :href="route('admin.schedule')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
            <span class="ms-3">
                <i class="fas fa-clock me-2"></i>
                Schedules
            </span>
        </Link>
    </li>

    <li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.appointment') }">
        <Link :href="route('admin.appointment')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
            <span class="ms-3">
                <i class="fas fa-calendar-alt me-2"></i>
                Appointments
            </span>
        </Link>
    </li>

    <li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.users') }">
        <Link :href="route('admin.users')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
            <span class="ms-3">
                <i class="fas fa-user me-2"></i>
                Users
            </span>
        </Link>
    </li>
    <li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.rooms') }">
    <Link :href="route('admin.rooms')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
        <span class="ms-3">
            <i class="fas fa-bed me-2"></i>
            Rooms
        </span>
    </Link>
</li>

<li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.departments') }">
        <Link :href="route('admin.departments')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
            <span class="ms-3">
                <i class="fas fa-building me-2"></i>
                Departments
            </span>
        </Link>
    </li>

    <li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.specialtys') }">
    <Link :href="route('admin.specialtys')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
        <span class="ms-3">
            <i class="fas fa-heartbeat me-2"></i>
            Specialty
        </span>
    </Link>
</li>
<li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.doctors') }">
        <Link :href="route('admin.doctors')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
            <span class="ms-3">
                <i class="fas fa-user-md me-2"></i>
                Doctors
            </span>
        </Link>
    </li>
 
 

    <li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.services') }">
        <Link :href="route('admin.services')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
            <span class="ms-3">
                <i class="fas fa-concierge-bell me-2"></i>
                Services
            </span>
        </Link>
    </li>
  


    <!-- Research Labs Link -->
<li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.research_labs') }">
    <Link :href="route('admin.research_labs')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
        <span class="ms-3">
            <i class="fas fa-flask me-2"></i>
            Research Labs
        </span>
    </Link>
</li>

<!-- Awards Link -->
<li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.awards') }">
    <Link :href="route('admin.awards')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
        <span class="ms-3">
            <i class="fas fa-trophy me-2"></i>
            Awards
        </span>
    </Link>
</li>

<!-- Awards Link -->
<li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.testimonials') }">
    <Link :href="route('admin.testimonials')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
        <span class="ms-3">
            <i class="fas fa-star me-2"></i>
            Testimonials
        </span>
    </Link>
</li>




<li :class="{ 'bg-yellow-300 rounded-lg': route().current('admin.settings') }">
        <Link :href="route('admin.settings')" class="flex items-center p-2 text-red-900 rounded-lg  hover:bg-yellow-300  group">
            <span class="ms-3">
                <i class="fas fa-cog me-2"></i>
                Settings
            </span>
        </Link>
    </li>

</ul>

        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <!-- Navbar and Header -->
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center">
                        <!-- Hamburger Button -->
                        <button
                            @click="showingSidebar = !showingSidebar"
                            class="text-gray-500 hover:text-gray-900 sm:hidden"
                        >
                            <svg
                                class="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        <!-- Header Slot -->
                        <div class="flex-grow">
                            <slot name="header" />
                        </div>

                        <!-- Settings Dropdown -->
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <span class="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
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
                                <DropdownLink :href="route('admin.profile')"
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
                </div>
            </header>

            <!-- Page Content (Scrollable) -->
            <main class="flex-1 overflow-y-auto p-6 bg-gray-100">
                <slot />
            </main>

            <!-- Footer -->
            <footer class="bg-white shadow-inner py-4">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center text-gray-500 text-sm">
                        <p>&copy; 2024 Surigao Health. All rights reserved.</p>
                        <p>
                            <a href="#" class="text-blue-500 hover:underline"
                                >Privacy Policy</a
                            >
                            |
                            <a href="#" class="text-blue-500 hover:underline"
                                >Terms of Service</a
                            >
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
