-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `item`
--

CREATE TABLE `project` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `github` varchar(255),
  `demo` varchar(255),
  `description` varchar(255) NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `item`
--

INSERT INTO `project` (`id`, `name`, `github`, `demo`, `description`, `date_start`, `date_end` ) VALUES
(1, 'Wild Post', 'https://github.com/QuentinSamuel/Wild-Post','https://simon-duc.github.io/potential-octo-umbrella/','Premier projet collaboratif dans le cadre de la formation Web de la Wild Code School -3eme semaine de formation' , '2022-03-14', '2022-03-25' ),

(2, 'Hero Corporation', 'https://github.com/QuentinSamuel/Hero-Corporation', 'https://theodep.github.io/Hero-Corporation/','Second projet collaboratif dans le cadre de la formation Web de la Wild Code School - 6eme semaine de formation', '2022-04-04', '2022-05-11'),

(3, 'Hackathon Champ Post', 'https://github.com/QuentinSamuel/hackathon-1-Champ-Post', NULL, 'Premier hackathon collaboratif dans le cadre de la formation Web de la Wild Code School - 11eme semaine de formation', '2022-05-12', '2022-05-13'),

(4, 'Postverta', 'https://github.com/QuentinSamuel/Postverta', NULL, 'Troisième projet collaboratif dans le cadre de la formation Web de la Wild Code School - 13eme semaine de formation', '2022-05-23', '2022-07-15'),

(5, 'Hackathon Apside', 'https://github.com/QuentinSamuel/hackathon-2-Apisde' , NULL, 'Deuxième hackathon collaboratif dans le cadre de la formation Web de la Wild Code School - 18eme semaine de formation', '2022-06-29', '2022-07-01');


--
-- Index pour les tables exportées
--

--
-- Index pour la table `item`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `item`
--
ALTER TABLE `project`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE `techno`(
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `techno`(`id`, `name`) VALUES
(1, 'HTML'),
(2, 'CSS'),
(3, 'Javascript'),
(4, 'React'),
(5, 'NodeJS'),
(6, 'Express'),
(7, 'Git'),
(8, 'MySQL');


ALTER TABLE `techno`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `techno`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
  
CREATE TABLE `project_techno`(
  `project_id` int(11) UNSIGNED NOT NULL,
  `techno_id` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY (project_id , techno_id),
  CONSTRAINT FK_Project_Techno_Project FOREIGN KEY (project_id) REFERENCES project(id),
  CONSTRAINT FK_Project_Techno_Techno FOREIGN KEY (techno_id) REFERENCES techno(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

INSERT INTO `project_techno` (`project_id`, `techno_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 7),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 7),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 7),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 7);



