<?php
    $juices = array("Kiwi Sizzler", "Mango Blast", "Peach Punch", "Papaya Yaga", "Bleu Blueberry", "Watermelon Delight", "Supreme Strawberry", "Avocado Amze", "Rang de Orange", "24 Carrot Gold", "Rasila Rasberry", "Joshila Jamun");
    $name = $_REQUEST["name"];
    $hint = "";

    // lookup all hints from array if $q is different from ""
    if ($name !== "") {
        $name = strtolower($name);
        $len=strlen($name);
        foreach($juices as $juice) {
            if (stristr($name, substr($juice, 0, $len))) {
                if ($hint === "") {
                    $hint = $juice;
                } else {
                    $hint .= " |".$juice;
                }
            }
        }
    }

    // Output "no suggestion" if no hint was found or output correct values
    echo $hint === "" ? "no suggestion" : $hint;
?>