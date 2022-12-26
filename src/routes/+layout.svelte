<script>
    import "../app.css"
    import {Button, Dropdown, DropdownItem, Chevron} from 'flowbite-svelte'
    
</script>
   
   
   
   <header class="sticky bg-green-700 top-0 drop-shadow-xl dark:drop-shadow-[0_20px_35px_rgba(255,255,255,0.03)]">
   
   <!-- <nav class="flex absolute right-10 top-5"> -->
   <nav class="flex flex-row mx-72 dark:text-white">
   
     <div class="items-end font-bold text-xl flex flex-row p-5 font-serif self-center">
       <div class="rounded-full h-14 w-14 p-5 bg-gray-500 self-center bg-center bg-cover bg-[url('https://www.fussball.de/export.media/-/action/getLogo/format/2/id/00ES8GNBJO0000A0VV0AG08LVUPGND5I')]"></div>
       <a class="text-3xl p-5" href="/"> SV Eintrach Reichenwalde </a>
     </div>
   
     <!-- <div id="nav-icon" class="h-16 w-16 p-2">
         <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
         </svg>
     </div> -->
     
     <div class="items-end flex-grow p-5 list-none self-center text-xl font-semibold">
         <ul class="flex flex-row-reverse">
           <li class="mx-4 order-last  hover:underline">?????????</li>
           <!-- <li class="mx-4  hover:underline">Manschaft</li> -->
           <li class="mx-4 hover:underline">

            <Button btnClass="flex justify-between items-center"><Chevron>Manschaften</Chevron></Button>
            <Dropdown>
                <DropdownItem><a href="/manschaften/c-jugend">C-Jugend</a></DropdownItem>
                <DropdownItem>D-Jugend</DropdownItem>
                <DropdownItem>E-Jugend</DropdownItem>
            </Dropdown>









             <!-- <button id="dropdownNavbarButton" data-dropdown-toggle="dropdown" class="flex justify-between items-center">Manschaften<svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button> -->
           
   
   
             <!-- Dropdown menu -->
             <!-- <div id="dropdown" class="hidden z-999 w-28 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                 <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownNavbarButton">
                   <li>
                     <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">E-Jugend</a>
                   </li>
                   <li>
                     <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">C-Jugend</a>
                   </li>
                   <li>
                     <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">D-Jugend</a>
                   </li>
                 </ul>
             </div> -->
         </li>
   
   
           <li class="mx-4 order-first hover:underline"><a href="/kontakt">Kontakt</a></li>
         </ul>
     </div>
   </nav>
   </header>

<slot></slot>



<footer class="bg-green-700 h-12 dark:text-white ">
    <div class="mx-6">
    <p>© SV Eintracht Reichenwalde - 2022</p>
    <div class="flex flex-row list-none">
      <li class="mr-3"><a href="">Impressum</a></li>
      <li class="mr-3"><a href="">Kontakt</a></li>
    </div>
    </div>
</footer>
   
   
   