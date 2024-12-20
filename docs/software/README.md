# Реалізація інформаційного та програмного забезпечення


## SQL-скрипт для створення початкового наповнення бази даних

```sql


-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema media_system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `media_system` ;

-- -----------------------------------------------------
-- Schema media_system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `media_system` DEFAULT CHARACTER SET utf8 ;
USE `media_system` ;

-- -----------------------------------------------------
-- Table `media_system`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`User` ;

CREATE TABLE IF NOT EXISTS `media_system`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`MediaContent`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`MediaContent` ;

CREATE TABLE IF NOT EXISTS `media_system`.`MediaContent` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  `body` VARCHAR(255) NOT NULL,
  `content_type` VARCHAR(45) NOT NULL,
  `created_at` DATE NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_MediaContent_User1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_MediaContent_User1`
    FOREIGN KEY (`user_id`)
    REFERENCES `media_system`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`Role` ;

CREATE TABLE IF NOT EXISTS `media_system`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`Permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`Permission` ;

CREATE TABLE IF NOT EXISTS `media_system`.`Permission` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`RolePermission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`RolePermission` ;

CREATE TABLE IF NOT EXISTS `media_system`.`RolePermission` (
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  PRIMARY KEY (`role_id`, `permission_id`),
  INDEX `fk_RolePermission_Permission1_idx` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `fk_RolePermission_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `media_system`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RolePermission_Permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `media_system`.`Permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`AnalysisReport`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`AnalysisReport` ;

CREATE TABLE IF NOT EXISTS `media_system`.`AnalysisReport` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `created_at` DATE NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_AnalysisReport_User1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_AnalysisReport_User1`
    FOREIGN KEY (`user_id`)
    REFERENCES `media_system`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`AnalysisResult`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`AnalysisResult` ;

CREATE TABLE IF NOT EXISTS `media_system`.`AnalysisResult` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  `body` VARCHAR(255) NOT NULL,
  `created_at` DATE NOT NULL,
  `analysisReport_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `analysisReport_id`, `user_id`),
  INDEX `fk_AnalysisResult_AnalysisReport1_idx` (`analysisReport_id` ASC) VISIBLE,
  INDEX `fk_AnalysisResult_User1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_AnalysisResult_AnalysisReport1`
    FOREIGN KEY (`analysisReport_id`)
    REFERENCES `media_system`.`AnalysisReport` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnalysisResult_User1`
    FOREIGN KEY (`user_id`)
    REFERENCES `media_system`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`MediaContentAnalysisResult`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`MediaContentAnalysisResult` ;

CREATE TABLE IF NOT EXISTS `media_system`.`MediaContentAnalysisResult` (
  `mediaContent_id` INT NOT NULL,
  `analysisResult_id` INT NOT NULL,
  PRIMARY KEY (`mediaContent_id`, `analysisResult_id`),
  INDEX `fk_MediaContentAnalysisResult_AnalysisResult1_idx` (`analysisResult_id` ASC) VISIBLE,
  CONSTRAINT `fk_MediaContentAnalysisResult_MediaContent1`
    FOREIGN KEY (`mediaContent_id`)
    REFERENCES `media_system`.`MediaContent` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_MediaContentAnalysisResult_AnalysisResult1`
    FOREIGN KEY (`analysisResult_id`)
    REFERENCES `media_system`.`AnalysisResult` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`Tag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`Tag` ;

CREATE TABLE IF NOT EXISTS `media_system`.`Tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`AnalysisResultTag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`AnalysisResultTag` ;

CREATE TABLE IF NOT EXISTS `media_system`.`AnalysisResultTag` (
  `analysisResult_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`analysisResult_id`, `tag_id`),
  INDEX `fk_AnalysisResultTag_Tag1_idx` (`tag_id` ASC) VISIBLE,
  CONSTRAINT `fk_AnalysisResultTag_AnalysisResult1`
    FOREIGN KEY (`analysisResult_id`)
    REFERENCES `media_system`.`AnalysisResult` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnalysisResultTag_Tag1`
    FOREIGN KEY (`tag_id`)
    REFERENCES `media_system`.`Tag` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`Source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`Source` ;

CREATE TABLE IF NOT EXISTS `media_system`.`Source` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `url` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`SourceTag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`SourceTag` ;

CREATE TABLE IF NOT EXISTS `media_system`.`SourceTag` (
  `tag_id` INT NOT NULL,
  `source_id` INT NOT NULL,
  PRIMARY KEY (`tag_id`, `source_id`),
  INDEX `fk_SourceTag_Source1_idx` (`source_id` ASC) VISIBLE,
  CONSTRAINT `fk_SourceTag_Tag1`
    FOREIGN KEY (`tag_id`)
    REFERENCES `media_system`.`Tag` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SourceTag_Source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `media_system`.`Source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`MediaContentTag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`MediaContentTag` ;

CREATE TABLE IF NOT EXISTS `media_system`.`MediaContentTag` (
  `tag_id` INT NOT NULL,
  `mediaContent_id` INT NOT NULL,
  PRIMARY KEY (`tag_id`, `mediaContent_id`),
  INDEX `fk_MediaContentTag_MediaContent1_idx` (`mediaContent_id` ASC) VISIBLE,
  CONSTRAINT `fk_MediaContentTag_Tag1`
    FOREIGN KEY (`tag_id`)
    REFERENCES `media_system`.`Tag` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_MediaContentTag_MediaContent1`
    FOREIGN KEY (`mediaContent_id`)
    REFERENCES `media_system`.`MediaContent` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`MediaContentSource`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`MediaContentSource` ;

CREATE TABLE IF NOT EXISTS `media_system`.`MediaContentSource` (
  `source_id` INT NOT NULL,
  `mediaContent_id` INT NOT NULL,
  PRIMARY KEY (`source_id`, `mediaContent_id`),
  INDEX `fk_MediaContentSource_MediaContent1_idx` (`mediaContent_id` ASC) VISIBLE,
  CONSTRAINT `fk_MediaContentSource_Source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `media_system`.`Source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_MediaContentSource_MediaContent1`
    FOREIGN KEY (`mediaContent_id`)
    REFERENCES `media_system`.`MediaContent` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`UserRole`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`UserRole` ;

CREATE TABLE IF NOT EXISTS `media_system`.`UserRole` (
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  INDEX `fk_UserRole_Role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_UserRole_User1`
    FOREIGN KEY (`user_id`)
    REFERENCES `media_system`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UserRole_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `media_system`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `media_system`.`AnalysisReportTag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `media_system`.`AnalysisReportTag` ;

CREATE TABLE IF NOT EXISTS `media_system`.`AnalysisReportTag` (
  `analysisReport_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`analysisReport_id`, `tag_id`),
  INDEX `fk_AnalysisReportTag_Tag1_idx` (`tag_id` ASC) VISIBLE,
  CONSTRAINT `fk_AnalysisReportTag_AnalysisReport1`
    FOREIGN KEY (`analysisReport_id`)
    REFERENCES `media_system`.`AnalysisReport` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnalysisReportTag_Tag1`
    FOREIGN KEY (`tag_id`)
    REFERENCES `media_system`.`Tag` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- Fill database with data
USE media_system

START TRANSACTION;

-- User table
INSERT INTO User (id, first_name, last_name, email, password) VALUES 
(1, 'Vladyslav', 'Sokolov', 'pppvladsok@gmail.com', 'vlada1976'),
(2, 'John', 'Doe', 'john.doe2000@gmail.com', '756433456'),
(3, 'Veronica', 'Shevchenko', 'lapamapa@ukr.net', 'geog21224'),
(4, 'Fiona', 'Martinez', 'fiona.martinez2@gmail.com', 'fieNa231'),
(5, 'Bob', 'Brown', 'cliriks@gmail.com', 'mamaaa1945'),
(6, 'David', 'Soloh', 'davasolom@gmail.com', 'timetorest'),
(7, 'Sergey', 'Semenyaka', 's.semenyaka@gmail.com', 'bazovichok222'),
(8, 'Anastasia', 'Golovchenko', 'ddd.anasnata@gmail.com', 'adacjavasj2'),
(9, 'Elena', 'Kovalenko', 'elena.kovalenko@gmail.com', 'kovalenko88'),
(10, 'Alex', 'Petrenko', 'alex.petr@yahoo.com', 'alexpass123');

-- Role table
INSERT INTO Role (id, name, description) VALUES
(1, 'User', 'An ordinary user of the system'),
(2, 'TechnicalExpert', 'Specialist in technical issues');

-- Permisson table
INSERT INTO Permission (id, name) VALUES
(1, 'user.role.promote'),
(2, 'user.delete'),
(3, 'content.create'),
(4, 'content.search'),
(5, 'content.update'),
(6, 'content.delete');

-- Tag table
INSERT INTO Tag (id, name) VALUES
(1, 'Science'),
(2, 'Technology'),
(3, 'Health'),
(4, 'Travel'),
(5, 'Environment'),
(6, 'Space Exploration'),
(7, 'Quantum Computing'),
(8, 'Renewable Energy'),
(9, 'Gaming'),
(10, 'Medicine'),
(11, 'Market Analysis'),
(12, 'Customer Insights'),
(13, 'Product Launch'),
(14, 'Sales Projections'),
(15, 'Employee Feedback'),
(16, 'Social Media'),
(17, 'Competitor Analysis'),
(18, 'Logistics'),
(19, 'User Experience');

-- Source table
INSERT INTO Source (id, name, url) VALUES
(1, 'National Geographic', 'https://www.nationalgeographic.com'),
(2, 'TechCrunch', 'https://techcrunch.com'),
(3, 'NASA', 'https://www.nasa.gov'),
(4, 'Healthline', 'https://www.healthline.com'),
(5, 'Quanta Magazine', 'https://www.quantamagazine.org'),
(6, 'TripAdvisor', 'https://www.tripadvisor.com'),
(7, 'YouTube', 'https://www.youtube.com'),
(8, 'GameSpot', 'https://www.gamespot.com'),
(9, 'PlayStation Blog', 'https://blog.playstation.com'),
(10, 'MedTech News', 'https://www.medtechnews.com');

-- MediaContent table
INSERT INTO MediaContent (`id`, `title`, `description`, `body`, `content_type`, `created_at`, `user_id`) VALUES
(1, 'Exploring the Ocean Depths', 'A comprehensive dive into the mysteries of the deep sea.', 'The ocean s depths hold secrets yet to be uncovered, from bioluminescent creatures to uncharted trenches. This exploration reveals the enigmatic wonders beneath the waves.', 'Article', '2024-11-01', 1),
(2, 'Advancements in AI', 'Recent breakthroughs in artificial intelligence technology.', 'AI advancements are reshaping our world, from smart assistants to autonomous vehicles. Cutting-edge algorithms and deep learning are driving this technological revolution.', 'Article', '2024-11-02', 2),
(3, 'History of Space Exploration', 'From the Moon landing to Mars missions.', 'https://youtu.be/3JuKR7jf46o?si=-eG_l82dAemgaZdW', 'Video', '2024-11-03', 3),
(4, 'Healthy Living Tips', 'Simple steps to improve your health and wellbeing.', 'https://www.healthline.com/health/how-to-maintain-a-healthy-lifestyle', 'Blog Post', '2024-11-04', 4),
(5, 'Understanding Quantum Computing', 'An introduction to the principles of quantum computing.', 'Quantum computing harnesses the power of quantum mechanics to process information in fundamentally new ways, promising exponential advances in speed and problem-solving capabilities.', 'Article', '2024-11-05', 5),
(6, 'Top 25 Travel Destinations', 'A list of must-visit places around the world.', 'https://www.tripadvisor.com/TravelersChoice-Destinations-cTop-g1', 'Blog Post', '2024-12-06', 6),
(7, 'The Future of Renewable Energy', 'How renewable energy sources are shaping our future.', 'https://youtu.be/zZheOMvPWGc?si=3C6qQHf-jUApOgB0', 'Video', '2024-12-07', 7),
(8, 'Cyberpunk Cityscape', 'A futuristic city teeming with life, neon lights, and advanced technology, showcasing a blend of high-rise buildings, flying cars, and bustling streets.', 'https://www.gamespot.com/a/uploads/original/1179/11799911/4363244-cyberpunk1.jpg', 'Image', '2024-12-08', 8),
(9, 'Epic Battle in Snowy Terrain', 'An intense battle between a warrior and a fierce opponent in a frozen, mountainous landscape.', 'https://blog.playstation.com/tachyon/2024/09/c31c0e1cae38ef6a23c353e31d87e8b1cd57b700.jpeg', 'Image', '2024-12-09', 9),
(10, 'Innovations in Healthcare', 'New technologies improving patient care.', 'Healthcare innovations like telemedicine and personalized treatments are revolutionizing patient care, enhancing accessibility, and improving outcomes for various medical conditions.', 'Article', '2024-12-10', 10);

-- AnalysisReport table
INSERT INTO AnalysisReport (`id`, `title`, `body`, `created_at`, `user_id`) VALUES 
(1, 'Quarterly Performance Analysis', 'In-depth analysis of quarterly performance.', '2024-01-01', 1),
(2, 'Market Trend Report', 'Overview of market trends for the current quarter.', '2024-01-02', 2),
(3, 'Customer Feedback Summary', 'Compilation of recent customer feedback.', '2024-01-03', 1),
(4, 'Product Launch Analysis', 'Analysis of the latest product launch success.', '2024-01-04', 3),
(5, 'Annual Revenue Forecast', 'Forecast based on historical data and market trends.', '2024-01-05', 2),
(6, 'Employee Satisfaction Report', 'Analysis of recent employee satisfaction survey.', '2024-01-06', 4),
(7, 'Social Media Impact Study', 'Impact analysis of social media campaigns.', '2024-01-07', 1),
(8, 'Competitor Benchmarking', 'Comparison of our product against competitors.', '2024-01-08', 3),
(9, 'Supply Chain Efficiency', 'Evaluation of supply chain performance and bottlenecks.', '2024-01-09', 4),
(10, 'Website Traffic Analysis', 'Insight into website traffic and user behavior.', '2024-01-10', 2);

-- RolePermisson table
INSERT INTO RolePermission (role_id, permission_id) VALUES
(2, 1),
(2, 2),
(1, 3),
(2, 3),
(1, 4),
(2, 4),
(1, 5),
(2, 5),
(1, 6),
(2, 6);

-- UserRole table
INSERT INTO `UserRole` (`user_id`, `role_id`) VALUES 
(1, 1), (1, 2),
(2, 2),
(3, 1), (3, 2),
(4, 1),
(5, 2),
(6, 1),
(7, 2),
(8, 1), (8, 2);

-- AnalysisResult table
INSERT INTO AnalysisResult (`id`, `title`, `description`, `body`, `created_at`, `analysisReport_id`, `user_id`) VALUES
(1, 'Q1 Growth Factors', 'Identified factors contributing to growth in Q1.', 'Analysis highlights key growth drivers.', '2024-02-01', 1, 1),
(2, 'Emerging Markets Overview', 'Details on potential emerging markets.', 'Summary of trends in new markets.', '2024-02-02', 2, 2),
(3, 'Top Customer Concerns', 'Key issues raised by customers recently.', 'Detailed analysis of common customer issues.', '2024-02-03', 3, 1),
(4, 'Launch Day Performance', 'Performance metrics on product launch day.', 'In-depth analysis of initial product success.', '2024-02-04', 4, 3),
(5, 'Projected Sales for Q3', 'Sales projection for the next quarter.', 'Data-driven sales projections based on trends.', '2024-02-05', 5, 2),
(6, 'Employee Morale Trends', 'Insights from recent employee feedback.', 'Analysis shows recent morale trends.', '2024-02-06', 6, 4),
(7, 'Social Media Engagement', 'Performance of recent social campaigns.', 'Highlights of user engagement metrics.', '2024-02-07', 7, 1),
(8, 'Competitor Price Comparison', 'Price benchmarking against competitors.', 'Comparative analysis of pricing structures.', '2024-02-08', 8, 3),
(9, 'Logistics Efficiency Review', 'Evaluation of logistics and delivery times.', 'Identified delays in supply chain process.', '2024-02-09', 9, 4),
(10, 'User Journey Insights', 'Behavioral insights on user website journey.', 'Detailed report on user interactions.', '2024-02-10', 10, 2);

-- MediaContentAnalysisResult table
INSERT INTO MediaContentAnalysisResult (mediaContent_id, analysisResult_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 7),
(7, 8),
(8, 9),
(9, 10),
(10, 1);

-- MediaContentSource table
INSERT INTO MediaContentSource (source_id, mediaContent_id) VALUES
(1, 1), (1, 10),
(2, 2), (2, 9),
(3, 3), (3, 8),
(4, 4), (4, 7),
(5, 5), (5, 6),
(6, 6), (6, 5),
(7, 7), (7, 4),
(8, 8), (8, 3),
(9, 9), (9, 2),
(10, 10), (10, 1);

-- AnalysisResultTag table
INSERT INTO AnalysisResultTag (`analysisResult_id`, `tag_id`) VALUES
(1, 1), 
(1, 11),
(2, 5),
(2, 11), 
(3, 12), 
(4, 13), 
(5, 14), 
(6, 3), 
(6, 15), 
(7, 16), 
(8, 17), 
(9, 18), 
(10, 2), 
(10, 19);

-- AnalysisReportTag table
INSERT INTO AnalysisReportTag (analysisReport_id, tag_id) VALUES 
(1, 2),  
(2, 2),  
(3, 3),  
(4, 2), 
(5, 8),  
(6, 3),  
(7, 2),  
(8, 1), 
(9, 8),  
(10, 2);

-- MediaContentTag table
INSERT INTO MediaContentTag (tag_id, mediaContent_id) VALUES 
(1, 1), 
(1, 2),
(1, 3),
(1, 5),
(1, 7), 
(1, 10),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 7),
(2, 10),
(3, 4),
(3, 10),
(4, 6),
(5, 1),
(5, 7),
(6, 3),
(7, 5),
(8, 7),
(9, 8),
(9,9),
(10, 4),
(10, 10);

-- SourceTag table
INSERT INTO SourceTag (tag_id, source_id) VALUES 
(1, 1), 
(1, 3),
(1, 4),
(1, 10),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 10),
(3, 4),
(3, 10),
(4, 1),
(4, 6),
(5, 1),
(6, 1),
(6, 3),
(7, 2),
(7, 5),
(8, 1),
(9, 8),
(9, 9),
(10, 4),
(10, 10);

COMMIT;


```


## RESTfull сервіс для управління даними

### Ініціалізація додатка FastAPI, створення таблиці в базі даних та підключення маршрутів API.
**main.py**
```python
from fastapi import FastAPI
from database import engine, Base
from routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router)
```


### Налаштування підключення до бази даних через SQLAlchemy та визначення основних компонентів ORM.
**database.py**
```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from config import DB_PASSWORD

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://root:{DB_PASSWORD}@127.0.0.1:3306/media_system"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
```


### Визначаються моделі таблиць бази даних для користувачів та медіаконтенту, а також їх зв’язки й структура.
**models.py**
```python
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime, timezone, timedelta

class User(Base):
    __tablename__ = 'User'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(45))
    last_name = Column(String(45))
    email = Column(String(45), index=True, unique=True)
    password = Column(String(45))

    contents = relationship("MediaContent", back_populates="user")


class MediaContent(Base):
    __tablename__ = 'MediaContent'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(45), index=True)
    description = Column(String(255), nullable=True)
    body = Column(String(255))
    content_type = Column(String(45))
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc) + timedelta(hours=2))
    user_id = Column(Integer, ForeignKey('User.id'), primary_key=True)

    user = relationship("User", back_populates="contents")
```


### Створюються Pydantic-схеми для валідації та серіалізації даних, які передаються через API.
**schemas.py**
```python
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class MediaContentCreate(BaseModel):
    id: Optional[int] = None
    title: str
    description: Optional[str] = None
    body: str
    content_type: str
    created_at: Optional[datetime] = None
    user_id: int


class UserCreate(BaseModel):
    id: Optional[int] = None
    first_name: str
    last_name: str
    email: str
    password: str


class MediaContentResponse(MediaContentCreate):
    class Config:
        orm_mode = True


class UserResponse(UserCreate):
    class Config:
        orm_mode = True


class UserPatch(BaseModel):
    id: int = None
    first_name: str = None
    last_name: str = None
    email: str = None
    password: str = None


class MediaContentPatch(BaseModel):
    id: int = None
    title: str = None
    description: Optional[str] = None
    body: str = None
    content_type: str = None
    created_at: Optional[datetime] = None
    user_id: int = None
```


### Визначаються маршрути REST API для CRUD операцій з користувачами та медіаконтентом.
**routers.py**
```python
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from models import MediaContent, User
from schemas import UserCreate, MediaContentCreate, UserResponse, MediaContentResponse, UserPatch, MediaContentPatch
from database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/mediacontent/", response_model=List[MediaContentResponse])
async def read_mediacontent(db: Session = Depends(get_db)):
    return db.query(MediaContent).all()


@router.get("/mediacontent/{mediacontent_id}", response_model=MediaContentResponse)
async def read_mediacontent_by_id(mediacontent_id: int, db: Session = Depends(get_db)):
    db_mediacontent = db.query(MediaContent).filter(mediacontent_id == MediaContent.id).first()
    if db_mediacontent is None:
        raise HTTPException(status_code=404, detail="The media content with the specified ID was not found")
    return db_mediacontent


@router.post("/mediacontent/", response_model=MediaContentResponse)
async def create_mediacontent(mediacontent: MediaContentCreate, db: Session = Depends(get_db)):
    id_mediacontent = db.query(MediaContent).filter(mediacontent.id == MediaContent.id).first()
    if id_mediacontent:
        raise HTTPException(status_code=400, detail="The media content with this ID already exists")

    id_user = db.query(User).filter(mediacontent.user_id == User.id).first()
    if not id_user:
        raise HTTPException(status_code=400, detail="The user with the specified ID was not found")

    db_mediacontent = MediaContent(**mediacontent.dict())
    db.add(db_mediacontent)
    db.commit()
    db.refresh(db_mediacontent)

    return db_mediacontent


@router.put("/mediacontent/{mediacontent_id}", response_model=MediaContentResponse)
async def update_mediacontent(mediacontent_id: int, mediacontent: MediaContentCreate, db: Session = Depends(get_db)):
    db_mediacontent = db.query(MediaContent).filter(mediacontent_id == MediaContent.id).first()
    if db_mediacontent is None:
        raise HTTPException(status_code=404, detail="The media content with the specified ID was not found")

    id_mediacontent = db.query(MediaContent).filter(mediacontent.id == MediaContent.id, MediaContent.id != mediacontent_id).first()
    if id_mediacontent:
        raise HTTPException(status_code=400, detail="The media content with this ID already exists")

    if mediacontent.user_id:
        id_user = db.query(User).filter(mediacontent.user_id == User.id).first()
        if not id_user:
            raise HTTPException(status_code=400, detail="The user with the specified ID was not found")

    for key, value in mediacontent.dict().items():
        setattr(db_mediacontent, key, value)

    db.commit()
    db.refresh(db_mediacontent)
    return db_mediacontent


@router.delete("/mediacontent/{mediacontent_id}", response_model=MediaContentResponse)
async def delete_mediacontent(mediacontent_id: int, db: Session = Depends(get_db)):
    db_mediacontent = db.query(MediaContent).filter(mediacontent_id == MediaContent.id).first()
    if db_mediacontent is None:
        raise HTTPException(status_code=404, detail="The media content with the specified ID was not found")

    db.delete(db_mediacontent)
    db.commit()
    return db_mediacontent


@router.patch("/mediacontent/{mediacontent_id}", response_model=MediaContentResponse)
async def patch_mediacontent(mediacontent_id: int, mediacontent: MediaContentPatch, db: Session = Depends(get_db)):
    db_mediacontent = db.query(MediaContent).filter(mediacontent_id == MediaContent.id).first()
    if db_mediacontent is None:
        raise HTTPException(status_code=404, detail="The media content with the specified ID was not found")

    updated_fields = mediacontent.dict(exclude_unset=True)

    if 'id' in updated_fields and updated_fields['id'] != mediacontent_id:
        id_mediacontent = db.query(MediaContent).filter(MediaContent.id == updated_fields['id']).first()
        if id_mediacontent:
            raise HTTPException(status_code=400, detail="The media content with this ID already exists")

    if 'user_id' in updated_fields:
        user = db.query(User).filter(User.id == updated_fields['user_id']).first()
        if not user:
            raise HTTPException(status_code=400, detail="The user with the specified ID was not found")

    for key, value in updated_fields.items():
        setattr(db_mediacontent, key, value)

    db.commit()
    db.refresh(db_mediacontent)
    return db_mediacontent


@router.get("/user/", response_model=List[UserResponse])
async def read_user(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return db.query(User).offset(skip).limit(limit).all()


@router.get("/user/{user_id}", response_model=UserResponse)
async def read_user_by_id(user_id: int, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(user_id == User.id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="The user with the specified ID was not found")
    return db_user


@router.post("/user/", response_model=UserResponse)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(user.id == User.id).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="The user with this ID already exists")

    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


@router.put("/user/{user_id}", response_model=UserResponse)
async def update_user(user_id: int, user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(user_id == User.id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="The user with the specified ID was not found")

    id_mediacontent = db.query(MediaContent).filter(user.id == User.id, user_id != User.id).first()
    if id_mediacontent:
        raise HTTPException(status_code=400, detail="The user with this ID already exists")

    for key, value in user.dict().items():
        setattr(db_user, key, value)

    db.commit()
    db.refresh(db_user)
    return db_user


@router.delete("/user/{user_id}", response_model=UserResponse)
async def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(user_id == User.id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="The user with the specified ID was not found")

    related_mediacontent = db.query(MediaContent).filter(user_id == MediaContent.user_id).first()
    if related_mediacontent:
        raise HTTPException(status_code=403, detail="Cannot delete user with associated media content")

    db.delete(db_user)
    db.commit()
    return db_user


@router.patch("/user/{user_id}", response_model=UserResponse)
async def patch_user(user_id: int, user: UserPatch, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(user_id == User.id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="The user with the specified ID was not found")

    updated_mediacontent = user.dict(exclude_unset=True)

    if 'id' in updated_mediacontent and updated_mediacontent['id'] != user_id:
        id_user = db.query(User).filter(User.id == updated_mediacontent['id']).first()
        if id_user:
            raise HTTPException(status_code=400, detail="The user with this ID already exists")

    for key, value in updated_mediacontent.items():
        setattr(db_user, key, value)

    db.commit()
    db.refresh(db_user)
    return db_user
```
