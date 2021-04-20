<?php

    class Utilisateur {
        public $nom;
        public $prenom;
        public $email;
        public $telephone;
        private $statut;
        private $admin; //Ceci n'est pas une gestion sécurisé de compte administrateur

        function __construct($nom, $prenom, $email, $telephone, $statut = "N/A", $admin = "N/A") {
            $this->nom = $nom;
            $this->prenom = $prenom;
            $this->email = $email;
            $this->telephone = $telephone;
            $this->statut = $statut; //Seulement fournir ses arguments dans la page admin et le check de connection PHP
            $this->admin = $admin;   //JAMAIS en Objet JS du coté client
        }

        function update($nom, $prenom, $email, $telephone) {
            $this->nom = $nom;
            $this->prenom = $prenom;
            $this->email = $email;
            $this->telephone = $telephone;
        }

        function getStatut() {
            return $this->statut;
        }

        function getAdmin() {
            return $this->admin;
        }
    }
    
?>