<script>
    import "../app.css"
    import {Button, Dropdown, DropdownItem, Chevron} from 'flowbite-svelte'
    import {base} from '$app/paths'
    
</script>
   
   
 
<header class="sticky bg-green-700 top-0 drop-shadow-xl dark:drop-shadow-[0_20px_35px_rgba(255,255,255,0.03)]">
   
    <nav class="flex flex-row mx-72 text-white dark:text-white">
   
<!--logo and name -->
     <div class="items-end font-bold text-xl flex flex-row p-5 font-serif self-center">
       <div class="rounded-full h-14 w-14 p-5 bg-gray-500 self-center bg-center bg-cover bg-[url('https://www.fussball.de/export.media/-/action/getLogo/format/2/id/00ES8GNBJO0000A0VV0AG08LVUPGND5I')]"></div>
       <a class="text-3xl p-5" href="{base}/"> SV Eintrach Reichenwalde </a>
     </div>
   
<!--fold Hamburger-->
     <!-- <div id="nav-icon" class="h-16 w-16 p-2">
         <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
         </svg>
     </div> -->
     
        <div class="items-end flex-grow p-5 list-none self-center text-xl font-semibold">
            <ul class="list-none ul flex flex-row-reverse">
              <li class="mx-4 order-last  hover:underline"><a href="{base}/news">News</a></li>
              <li class="mx-4 hover:underline">

                   <Button btnClass="flex justify-between items-center"><Chevron>Manschaften</Chevron></Button>
                   <Dropdown class="ul w-44">
                       <DropdownItem><a href="{base}/manschaften/c-jugend">C-Jugend</a></DropdownItem>
                       <DropdownItem><a href="{base}/manschaften/d-jugend">D-Jugend</a></DropdownItem>
                       <DropdownItem><a href="{base}/manschaften/e-jugend">E-Jugend</a></DropdownItem>
                   </Dropdown>
               </li>
   
   
              <li class="mx-4 order-first hover:underline"><a href="{base}/kontakt">Kontakt</a></li>
            </ul>
        </div>

    </nav>
</header>

   <main class="text-black dark:text-white dark:bg-gray-800  min-h-full mx-72 my-10">
    <slot></slot>
   </main>




<footer class="bg-green-700 h-12 text-white dark:text-white ">
    <div class="mx-6">
    <p class="p">© SV Eintracht Reichenwalde - 2022</p>
    <div class="flex flex-row list-none">
      <li class="mr-3 hover:underline">Impressum</li>
      <li class="mr-3 hover:underline"><a href="{base}/kontakt">Kontakt</a></li>
    </div>
    </div>
</footer>
