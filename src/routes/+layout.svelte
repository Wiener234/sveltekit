<script>
    import "../app.css"
    //import {Button, Dropdown, DropdownItem, Chevron} from 'flowbite-svelte'
    import {base} from '$app/paths'
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Chevron, Button, SidebarDropdownItem,SidebarDropdownWrapper } from 'flowbite-svelte'
    
</script>
   
   
 
<header class="sticky bg-green-700 top-0 drop-shadow-xl dark:drop-shadow-[0_20px_35px_rgba(255,255,255,0.03)]">
   
<!--    <nav class="flex flex-row max-w-max mx-auto text-white dark:text-white">
   
<!--logo and name 
     <div class="items-end font-bold text-sm flex flex-row p-5 font-serif self-center">
       <div class="rounded-full h-14 w-14 p-5 bg-gray-500 self-center bg-center bg-cover bg-[url('
       https://www.fussball.de/export.media/-/action/getLogo/format/2/id/00ES8GNBJO0000A0VV0AG08LVUPGND5I
       ')]"/>
       <a class="text-sm p-5 md:text-red-500" href="{base}/"> SV Eintrach Reichenwalde </a>
     </div> -->


<Navbar let:hidden let:toggle color="none" navDivClass="flex text-white text-xl font-bold items-center justify-between mx-auto min-md:flex-row max-md:flex-wrap">
  <NavBrand href="{base}/">
    <img
      src="https://www.fussball.de/export.media/-/action/getLogo/format/2/id/00ES8GNBJO0000A0VV0AG08LVUPGND5I"
      class="img mr-3 h-11 sm:h-14 m-3 rounded-full"
      alt="SV Eintracht Reichenwalde Logo"
    />
    <span class="self-center whitespace-normal sm:text-3xl text-sm font-semibold dark:text-white">
      SV Eintracht Reichenwalde
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} class="text-white hover:border-0 dark:text-white fill:border-0 focus:ring-green-700 hover:bg-white" shadow="null"/>
  <NavUl {hidden} ulClass="text-white bg-green-700 dark:bg-green-700 dark:text-white border-0 flex flex-col md:flex-row ul self-center p-5 md:items-end">
    <NavLi href="{base}/news" nonActiveClass="hover:underline md:mx-4">News</NavLi>
    <Button id="nav-menu" btnClass="hover:underline md:mx-4 flex items-center justify-between max-md:hidden"><Chevron>Manschaften</Chevron></Button>
    <SidebarDropdownWrapper label="Manschaften" btnClass="hover:underline md:mx-4 max-md:flex items-center justify-between hidden text-white">
      <SidebarDropdownItem label="C-Jugend" class="text-white" href="{base}/manschaften/c-jugend" />
      <SidebarDropdownItem label="D-Jugend" class="text-white" href="{base}/manschaften/d-jugend" />
      <SidebarDropdownItem label="E-Jugend" class="text-white" href="{base}/manschaften/e-jugend" />
    </SidebarDropdownWrapper>
    <NavLi href="{base}/kontakt" nonActiveClass="hover:underline md:mx-4">Kontakt</NavLi>
    <Dropdown triggeredBy="#nav-menu" class="ul w-44 z-20 ">
      <DropdownItem><a href="{base}/manschaften/c-jugend">C-Jugend</a></DropdownItem>
      <DropdownItem><a href="{base}/manschaften/d-jugend">D-Jugend</a></DropdownItem>
      <DropdownItem><a href="{base}/manschaften/e-jugend">E-Jugend</a></DropdownItem>
    </Dropdown>

  </NavUl>
</Navbar>


</header>

   <main class="text-black dark:text-white dark:bg-gray-800 min-h-full max-w-3xl p-3 mx-auto my-10">
    <div class="markdown">
    <slot></slot>
    </div>
   </main>




<footer class="bg-green-700 h-12 text-white dark:text-white ">
    <div class="mx-6">
    <p class="p">© SV Eintracht Reichenwalde - 2022</p>
    <div class="flex flex-row list-none">
      <li class="mr-3 hover:underline"><a href="{base}/impressum">Impressum</a></li>
      <li class="mr-3 hover:underline"><a href="{base}/kontakt">Kontakt</a></li>
    </div>
    </div>
</footer>
