<?php 
    class Mysql{

        static private $connection = "mysql:dbname=agenda;host=localhost";
        static private $query;
        
        public static function connect() {
            try {
                return $dbh = new PDO(self::$connection, "root", "");
            }
            catch(PDOException $e) {
                return "Erreur !: ".$e->getMessage()."</br>";
                die();
            }
        }
        
        public static function getLogin($email) {

            $db = self::connect();
            $req = $db->prepare("SELECT email, mot_de_passe, status FROM utilisateurs WHERE email = '".$email."'");

            $req->execute();
            
            $response = $req->fetch();
            return $response;

        }
        
        public static function getUser($email) {
            $db = self::connect();
            $req = $db->prepare("SELECT nom, prenom, email, telephone, status FROM utilisateurs WHERE email = '".$email."'");

            $req->execute();
            
            $response = $req->fetch();

            $user = new Utilisateur($response['nom'], $response['prenom'], $response['email'], $response['telephone'], $response['status']);
            return $user;
        }

        public static function setUser($User, $mot_de_passe) {

            $db = self::connect();
            $req = $db->prepare("INSERT INTO utilisateurs (nom, prenom, email, telephone, mot_de_passe, status) VALUES (?,?,?,?,?,0)");

            $req->execute([
                $User->nom,
                $User->prenom,
                $User->email,
                $User->telephone,
                $mot_de_passe
            ]);
            
            $response = $req->fetch();
            return $response;

        }
    }

?>