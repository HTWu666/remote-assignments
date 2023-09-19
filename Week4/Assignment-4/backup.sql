-- MySQL dump 10.13  Distrib 8.1.0, for Win64 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `title` text NOT NULL,
  `content` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,1,'Unlocking the Power of Facial Blurring in Media: A Comprehensive Exploration and Model Comparison','In today’s data-driven world, ensuring the privacy and anonymity of individuals is of paramount importance. From protecting personal identities to complying with stringent regulations like GDPR, the need for efficient and reliable solutions to anonymize faces in various media formats has never been greater.'),(2,1,'Advice From a Software Engineer With 8 Years of Experience','This article comes from a recent self-reflection on the things I wish I had started doing earlier in my career and the things I wish I had done differently.'),(3,1,'Don’t Just LeetCode; Follow the Coding Patterns Instead','Like it or not, LeetCode-type questions are part of almost every programming interview, so every software developer should practice them before an interview. Their only option is to prepare smartly and learn problem-solving by focusing on the underlying problem patterns.'),(4,1,'No More Leetcode: The Stripe Interview Experience','In light of the recent layoffs, which I think Stripe handled well (CEO’s note to employees), I wanted to share my interview experience with them.'),(5,1,'aaa','bbb'),(6,2,'sss','ddd'),(7,2,'fff','qqq'),(8,2,'eee','www'),(9,2,'bb','rrrrr'),(10,2,'lll','ppp'),(11,2,'jd','df'),(12,2,'fre','fdve'),(13,2,'rhr','brt'),(14,2,'trefr','brtger'),(15,2,'uyjetyh','trhrt'),(16,2,'4tgfbgf','nhtyeh'),(18,4,'hrt','hgnbt'),(19,4,'hbrt','hbnret'),(20,4,'rthrt','nggew'),(21,4,'rtgbrtw','nterf'),(22,4,'bhtr','ytntg'),(23,4,'vbswt','jk,u'),(24,4,'rgege','hjmt'),(25,4,'hnjrwt','hjmtedtx'),(26,4,'nrsw','hnrt'),(27,4,'k,tdyh','brstgr'),(28,4,'bhrtg','jhymty'),(29,4,'fhbrt','hgnrt'),(30,4,'hgnrt','uktj'),(31,4,'qferg','hjmktyj');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-19 15:21:50
