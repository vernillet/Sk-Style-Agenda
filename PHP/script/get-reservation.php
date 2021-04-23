<?php
    $semaine = $_GET["select"];

    class evenement {
        public $dateDebut;
        public $dateFin;
        public $type;
        public $row;
        public $column;
        public $reserver = true;

        function __construct($dateDebut, $dateFin, $type) {
            $this->dateDebut = $dateDebut;
            $this->dateFin = $dateFin;
            $this->type = $type;
            $this->getPosition();
        }

        function getPosition() {
            
            $row = 0;
            $column = 0;

            switch (date('D', $this->dateDebut)) {
                case "Mon": 
                    $column = 1;
                    break;
                case "Tue":
                    $column = 2;
                    break;
                case "Wed":
                    $column = 3;
                    break;
                case "Thu":
                    $column = 4;
                    break;
                case "Fri":
                    $column = 5;
                    break;
            }

            switch (date('H:i', $this->dateDebut)) {
                case "09:00": { $row = 1; break; }
                case "09:15": { $row = 2; break; }
                case "09:30": { $row = 3; break; }
                case "09:45": { $row = 4; break; }
                case "10:00": { $row = 5; break; }
                case "10:15": { $row = 6; break; }
                case "10:30": { $row = 7; break; }
                case "10:45": { $row = 8; break; }
                case "11:00": { $row = 9; break; }
                case "11:15": { $row = 10; break; }
                case "11:30": { $row = 11; break; }
                case "11:45": { $row = 12; break; }
                case "12:00": { $row = 13; break; }
                case "12:15": { $row = 14; break; }
                case "12:30": { $row = 15; break; }
                case "12:45": { $row = 16; break; }
                case "13:00": { $row = 17; break; }
                case "13:15": { $row = 18; break; }
                case "13:30": { $row = 19; break; }
                case "13:45": { $row = 20; break; }
                case "14:00": { $row = 21; break; }
                case "14:15": { $row = 22; break; }
                case "14:30": { $row = 23; break; }
                case "14:45": { $row = 24; break; }
                case "15:00": { $row = 25; break; }
                case "15:15": { $row = 26; break; }
                case "15:30": { $row = 27; break; }
                case "15:45": { $row = 28; break; }
                case "16:00": { $row = 29; break; }
                case "16:15": { $row = 30; break; }
                case "16:30": { $row = 31; break; }
                case "16:45": { $row = 32; break; }
                case "17:00": { $row = 33; break; }
                case "17:15": { $row = 34; break; }
                case "17:30": { $row = 35; break; }
                case "17:45": { $row = 36; break; }
                case "18:00": { $row = 37; break; }
                case "18:15": { $row = 38; break; }
                case "18:30": { $row = 39; break; }
                case "18:45": { $row = 40; break; }
                case "19:00": { $row = 41; break; }
                case "19:15": { $row = 42; break; }
                case "19:30": { $row = 43; break; }
                case "19:45": { $row = 44; break; }
            }
            
            $this->row = $row;
            $this->column = $column;

        }
    }

    $reservation_1 = new evenement(strtotime("02-03-2021 09:15"),strtotime("02-03-2021 10:00"),"reservation");
    $reservation_2 = new evenement(strtotime("01-03-2021 10:30"),strtotime("02-03-2021 11:15"),"reservation");
    $reservation_3 = new evenement(strtotime("01-03-2021 14:45"),strtotime("02-03-2021 15:30"),"reservation");
    $reservation_4 = new evenement(strtotime("03-03-2021 19:00"),strtotime("02-03-2021 19:45"),"reservation");

    $response = new stdClass;
    $response->weekReservation = [$reservation_1 , $reservation_2, $reservation_3, $reservation_4];

    $eventJSON = json_encode($response);

    echo $eventJSON;

?>