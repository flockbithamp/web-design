<?php


class MENU{
    function  tea_preperation(){
    	echo "1. Add water \n";
    	echo "2. Add sugar \n";
    	echo "3. Add tea leaves \n";
    	echo "4. Add milk \n";
     }
     
     function cook_rice(){
         echo "1. Clean rice\n";
         echo "2. Put oil \n";
         echo "3. Put cumin seeds \n";
         echo "4. Boil it \n";
     }
    
}



class CLEANING{
    
    function clean_kitchen(){
        echo "1. Clean Fridge \n";
        echo "2. Clean Shelf \n";
        echo "3. Clean Floor \n";
    }
    function washroom(){
        echo "1. Clean Washroom \n";
    }
}


$menu = new MENU;
$menu->tea_preperation();
echo "\n";
$menu->cook_rice();


?>
