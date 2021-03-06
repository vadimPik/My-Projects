USE [master]
GO
/****** Object:  Database [DocumentsExam]    Script Date: 23/06/2020 02:42:11 PM ******/
CREATE DATABASE [DocumentsExam]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DocumentsExam', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DocumentsExam.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DocumentsExam_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DocumentsExam_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [DocumentsExam] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DocumentsExam].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DocumentsExam] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DocumentsExam] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DocumentsExam] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DocumentsExam] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DocumentsExam] SET ARITHABORT OFF 
GO
ALTER DATABASE [DocumentsExam] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DocumentsExam] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DocumentsExam] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DocumentsExam] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DocumentsExam] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DocumentsExam] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DocumentsExam] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DocumentsExam] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DocumentsExam] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DocumentsExam] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DocumentsExam] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DocumentsExam] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DocumentsExam] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DocumentsExam] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DocumentsExam] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DocumentsExam] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DocumentsExam] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DocumentsExam] SET RECOVERY FULL 
GO
ALTER DATABASE [DocumentsExam] SET  MULTI_USER 
GO
ALTER DATABASE [DocumentsExam] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DocumentsExam] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DocumentsExam] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DocumentsExam] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DocumentsExam] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DocumentsExam', N'ON'
GO
ALTER DATABASE [DocumentsExam] SET QUERY_STORE = OFF
GO
USE [DocumentsExam]
GO
/****** Object:  Table [dbo].[DocumentKeywords]    Script Date: 23/06/2020 02:42:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DocumentKeywords](
	[DocumentKeywordsID] [int] IDENTITY(1,1) NOT NULL,
	[DocID] [int] NOT NULL,
	[KeywordID] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Documents]    Script Date: 23/06/2020 02:42:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Documents](
	[DocID] [int] IDENTITY(1,1) NOT NULL,
	[DocDate] [datetime2](0) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Keywords]    Script Date: 23/06/2020 02:42:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Keywords](
	[KeywordID] [int] IDENTITY(1,1) NOT NULL,
	[Keyword] [varchar](255) NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[DocumentKeywords] ON 

INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (1, 1, 1)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (2, 1, 2)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (3, 2, 3)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (4, 2, 4)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (5, 2, 1)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (6, 3, 2)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (7, 3, 1)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (8, 3, 4)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (9, 4, 4)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (10, 5, 1)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (11, 6, 2)
INSERT [dbo].[DocumentKeywords] ([DocumentKeywordsID], [DocID], [KeywordID]) VALUES (14, 1, 2)
SET IDENTITY_INSERT [dbo].[DocumentKeywords] OFF
GO
SET IDENTITY_INSERT [dbo].[Documents] ON 

INSERT [dbo].[Documents] ([DocID], [DocDate]) VALUES (1, CAST(N'1990-01-10T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Documents] ([DocID], [DocDate]) VALUES (2, CAST(N'1993-03-08T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Documents] ([DocID], [DocDate]) VALUES (3, CAST(N'1995-05-04T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Documents] ([DocID], [DocDate]) VALUES (4, CAST(N'2018-02-03T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Documents] ([DocID], [DocDate]) VALUES (5, CAST(N'2020-06-23T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Documents] ([DocID], [DocDate]) VALUES (6, CAST(N'1995-01-01T00:00:00.0000000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Documents] OFF
GO
SET IDENTITY_INSERT [dbo].[Keywords] ON 

INSERT [dbo].[Keywords] ([KeywordID], [Keyword]) VALUES (1, N'Blue')
INSERT [dbo].[Keywords] ([KeywordID], [Keyword]) VALUES (2, N'Yellow')
INSERT [dbo].[Keywords] ([KeywordID], [Keyword]) VALUES (3, N'Red')
INSERT [dbo].[Keywords] ([KeywordID], [Keyword]) VALUES (4, N'Orange')
SET IDENTITY_INSERT [dbo].[Keywords] OFF
GO
USE [master]
GO
ALTER DATABASE [DocumentsExam] SET  READ_WRITE 
GO
