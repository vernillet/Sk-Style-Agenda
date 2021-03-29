<?php
    $semaine = $_GET["select"];

    class evenement {
        public $dateDebut;
        public $duree;
        public $type;
        public $row;
        public $column;

        function __construct($dateDebut, $duree, $type) {
            
            $this->dateDebut = $dateDebut;
            $this->duree = $duree;
            $this->type = $type;

            switch (date('H:i', $this->dateDebut)) {

                case "09:00": { $this->row = 1; break; }
                case "09:15": { $this->row = 2; break; }
                case "09:30": { $this->row = 3; break; }
                case "09:45": { $this->row = 4; break; }
                case "10:00": { $this->row = 5; break; }
                case "10:15": { $this->row = 6; break; }
                case "10:30": { $this->row = 7; break; }
                case "10:45": { $this->row = 8; break; }
                case "11:00": { $this->row = 9; break; }
                case "11:15": { $this->row = 10; break; }
                case "11:30": { $this->row = 11; break; }
                case "11:45": { $this->row = 12; break; }
                case "12:00": { $this->row = 13; break; }
                case "12:15": { $this->row = 14; break; }
                case "12:30": { $this->row = 15; break; }
                case "12:45": { $this->row = 16; break; }
                case "13:00": { $this->row = 17; break; }
                case "13:15": { $this->row = 18; break; }
                case "13:30": { $this->row = 19; break; }
                case "13:45": { $this->row = 20; break; }
                case "14:00": { $this->row = 21; break; }
                case "14:15": { $this->row = 22; break; }
                case "14:30": { $this->row = 23; break; }
                case "14:45": { $this->row = 24; break; }
                case "15:00": { $this->row = 25; break; }
                case "15:15": { $this->row = 26; break; }
                case "15:30": { $this->row = 27; break; }
                case "15:45": { $this->row = 28; break; }
                case "16:00": { $this->row = 29; break; }
                case "16:15": { $this->row = 30; break; }
                case "16:30": { $this->row = 31; break; }
                case "16:45": { $this->row = 32; break; }
                case "17:00": { $this->row = 33; break; }
                case "17:15": { $this->row = 34; break; }
                case "17:30": { $this->row = 35; break; }
                case "17:45": { $this->row = 36; break; }
                case "18:00": { $this->row = 37; break; }
                case "18:15": { $this->row = 38; break; }
                case "18:30": { $this->row = 39; break; }
                case "18:45": { $this->row = 40; break; }
                case "19:00": { $this->row = 41; break; }
                case "19:15": { $this->row = 42; break; }
                case "19:30": { $this->row = 43; break; }
                case "19:45": { $this->row = 44; break; }
                
            }

            switch (date('D', $this->dateDebut)) {
                case "Mon": 
                    $this->column = 1;
                    break;
                case "Tue":
                    $this->column = 2;
                    break;
                case "Wed":
                    $this->column = 3;
                    break;
                case "Thu":
                    $this->column = 4;
                    break;
                case "Fri":
                    $this->column = 5;
                    break;
            }

        }

    }

    $reservation_1 = new evenement(strtotime("02-03-2021 09:15"),4,"reservation");
    $reservation_2 = new evenement(strtotime("01-03-2021 10:30"),4,"reservation");
    $reservation_3 = new evenement(strtotime("01-03-2021 14:45"),4,"reservation");
    $reservation_4 = new evenement(strtotime("03-03-2021 19:00"),4,"reservation");
    $reservation_5 = new evenement(strtotime("04-03-2021 14:15"),10,"atelier");

    $eventJSON = json_encode([$reservation_1 , $reservation_2, $reservation_3, $reservation_4, $reservation_5]);

    echo $eventJSON;

?>