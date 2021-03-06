USE [master]
GO
/****** Object:  Database [CustomersProj]    Script Date: 28/06/2020 12:39:28 AM ******/
CREATE DATABASE [CustomersProj]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CustomersProj', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CustomersProj.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CustomersProj_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CustomersProj_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [CustomersProj] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CustomersProj].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CustomersProj] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CustomersProj] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CustomersProj] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CustomersProj] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CustomersProj] SET ARITHABORT OFF 
GO
ALTER DATABASE [CustomersProj] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CustomersProj] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CustomersProj] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CustomersProj] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CustomersProj] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CustomersProj] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CustomersProj] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CustomersProj] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CustomersProj] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CustomersProj] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CustomersProj] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CustomersProj] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CustomersProj] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CustomersProj] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CustomersProj] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CustomersProj] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CustomersProj] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CustomersProj] SET RECOVERY FULL 
GO
ALTER DATABASE [CustomersProj] SET  MULTI_USER 
GO
ALTER DATABASE [CustomersProj] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CustomersProj] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CustomersProj] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CustomersProj] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CustomersProj] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'CustomersProj', N'ON'
GO
ALTER DATABASE [CustomersProj] SET QUERY_STORE = OFF
GO
USE [CustomersProj]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 28/06/2020 12:39:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CustomerID] [varchar](255) NOT NULL,
	[CustomerName] [varchar](255) NOT NULL,
	[CustomerEmail] [varchar](255) NOT NULL,
	[CustomerAdress] [varchar](255) NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 

INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (1, N'308542562', N'James', N'telbij@comcast.net', N'25 Rosewood Lane Oklahoma City OK 73112')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (2, N'308542563', N'John', N'bcevc@gmail.com', N'7539 Liberty Court Pataskala OH 43062')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (3, N'308542564', N'Robert', N'mcmillan@outlook.com', N'811 Pawnee Dr. Saint Joseph MI 49085')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (4, N'308542565', N'Michael', N'codex@sbcglobal.net', N'9854 West Bayport Avenue Davison MI 48423')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (5, N'308542566', N'William', N'kodeman@msn.com', N'8564 Fremont Lane Revere MA 02151')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (6, N'308542567', N'David', N'claypool@me.com', N'984 Piper St. El Paso TX 79930')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (7, N'308542568', N'Richard', N'sonnen@gmail.com', N'79 James Lane Indian Trail NC 28079')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (8, N'308542569', N'Joseph', N'itstatus@icloud.com', N'7756 Summer Lane Dalton GA 30721')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (9, N'308542570', N'Thomas', N'fudrucker@sbcglobal.net', N'453 Westminster Ave. Lindenhurst NY 11757')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (10, N'308542571', N'Charles', N'kingma@optonline.net', N'499 Bowman St. Saint Augustine FL 32084')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (11, N'308542572', N'Christopher', N'bjornk@hotmail.com', N'4 N. Rockville Street Oak Lawn IL 60453')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (12, N'308542573', N'Daniel', N'quantaman@msn.com', N'516 Foxrun Lane Kaukauna WI 54130')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (13, N'308542574', N'Matthew', N'overbom@live.com', N'284 Summerhouse Street Mcallen TX 78501')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (14, N'308542575', N'Anthony', N'leviathan@verizon.net', N'927 Nut Swamp Rd. Fort Worth TX 76110')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (15, N'308542576', N'Donald', N'kaiser@mac.com', N'45 Middle River Drive Stratford CT 06614')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (16, N'308542577', N'Mark', N'ranasta@aol.com', N'9484 High Drive Poughkeepsie NY 12601')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (17, N'308542578', N'Paul', N'jbryan@aol.com', N'8721 St Margarets St. Glen Burnie MD 21060')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (18, N'308542579', N'Steven', N'houle@att.net', N'8105 Wintergreen Dr. Indiana PA 15701')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (19, N'308542580', N'Andrew', N'noahb@msn.com', N'986 Bear Hill Drive Deerfield Beach FL 33442')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (20, N'308542581', N'Kenneth', N'miami@sbcglobal.net', N'614 Cedar Swamp Dr. Southgate MI 48195')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (21, N'308542582', N'Joshua', N'kingma@sbcglobal.net', N'8483 Dunbar St. Groton CT 06340')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (22, N'308542583', N'George', N'aukjan@comcast.net', N'636 E. Country Club Circle Algonquin IL 60102')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (23, N'308542584', N'Kevin', N'mxiao@yahoo.ca', N'7414 Sunbeam St. Winter Springs FL 32708')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (24, N'308542585', N'Brian', N'heckerman@mac.com', N'8469 Homestead Street Lake Mary FL 32746')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (25, N'308542586', N'Edward', N'falcao@live.com', N'7 Canterbury Ave. Voorhees NJ 08043')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (26, N'308542587', N'Ronald', N'erynf@att.net', N'8017 Temple Street Helena MT 59601')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (27, N'308542588', N'Timothy', N'mallanmba@hotmail.com', N'21 Pendergast Drive Eugene OR 97402')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (28, N'308542589', N'Jason', N'szymansk@verizon.net', N'81 Golden Star Street Antioch TN 37013')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (29, N'308542590', N'Jeffrey', N'pierce@hotmail.com', N'98 El Dorado Court Zion IL 60099')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (30, N'308542591', N'Ryan', N'sethbrown@att.net', N'18 Country Club Rd. Derby KS 67037')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (31, N'308542592', N'Jacob', N'steve@att.net', N'59 Division Court Hummelstown PA 17036')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (32, N'308542593', N'Gary', N'gfody@hotmail.com', N'644 Trusel Road Owings Mills MD 21117')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (33, N'308542594', N'Nicholas', N'kludge@yahoo.com', N'7513 Lafayette Street Butte MT 59701')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (34, N'308542595', N'Eric', N'oracle@mac.com', N'8799 West Anderson Drive New Britain CT 06051')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (35, N'308542596', N'Stephen', N'bader@att.net', N'80 Sutor Court Dedham MA 02026')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (36, N'308542597', N'Jonathan', N'pthomsen@yahoo.com', N'8592 Glen Eagles Drive Carol Stream IL 60188')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (37, N'308542598', N'Larry', N'raines@icloud.com', N'7480 Catherine St. Ellicott City MD 21042')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (38, N'308542599', N'Justin', N'paina@hotmail.com', N'83 Dunbar Street Hillsborough NJ 08844')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (39, N'308542600', N'Scott', N'parkes@att.net', N'7144 High Noon Ave. Harleysville PA 19438')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (40, N'308542601', N'Brandon', N'bonmots@gmail.com', N'48 North Aspen Road Saint Paul MN 55104')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (41, N'308542602', N'Frank', N'maikelnai@verizon.net', N'34 Summer Street Herndon VA 20170')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (42, N'308542603', N'Benjamin', N'overbom@yahoo.ca', N'9881 Plumb Branch Ave. Crown Point IN 46307')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (43, N'308542604', N'Gregory', N'aukjan@icloud.com', N'86 West New Saddle Street West Springfield MA 01089')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (44, N'308542605', N'Samuel', N'cyrus@optonline.net', N'9 Hilltop Ave. Manassas VA 20109')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (45, N'308542606', N'Raymond', N'tristan@me.com', N'847 Grandrose Rd. Matthews NC 28104 9350 N. Mill Pond St.')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (46, N'308542607', N'Patrick', N'inico@yahoo.com', N'Brunswick GA 31525 ')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (47, N'308542608', N'Alexander', N'avalon@sbcglobal.net', N'7878 Brickell Rd. Muskegon MI 49441')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (48, N'308542609', N'Jack', N'sscorpio@yahoo.ca', N'7498 Clay St. Fairfax VA 22030')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (49, N'308542610', N'Dennis', N'johnbob@icloud.com', N'594B Wayne Drive Port Jefferson Station NY 11776')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (50, N'308542611', N'Jerry', N'andrei@outlook.com', N'660 Elm Lane Sevierville TN 37876')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (51, N'308542612', N'Tyler', N'rkobes@me.com', N'48 Primrose St. Oxford MS 38655')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (52, N'308542613', N'Aaron', N'meder@yahoo.ca', N'366 E. Squaw Creek Ave. Hampton VA 23666')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (53, N'308542614', N'Jose', N'kodeman@yahoo.com', N'9100 Harrison Ave. New Brunswick NJ 08901')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (54, N'308542615', N'Henry', N'petersko@aol.com', N'28 W. El Dorado Dr. Fort Dodge IA 50501')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (55, N'308542616', N'Douglas', N'nasarius@outlook.com', N'74 Leeton Ridge St. Milford MA 01757')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (56, N'308542617', N'Adam', N'unreal@sbcglobal.net', N'7293 West Indian Summer Street Pawtucket RI 02860')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (57, N'308542618', N'Peter', N'gavollink@yahoo.com', N'64 Joy Ridge Ave. Skokie IL 60076')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (58, N'308542619', N'Nathan', N'wortmanj@aol.com', N'45 Rockcrest Ave. Langhorne PA 19047')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (59, N'308542620', N'Zachary', N'smartfart@hotmail.com', N'9326 Laurel Ave. Merrick NY 11566')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (60, N'308542621', N'Walter', N'baveja@att.net', N'7193 S. Smoky Hollow St. Paterson NJ 07501')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (61, N'308542622', N'Kyle', N'russotto@verizon.net', N'8910 Hill Field Street Granger IN 46530')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (62, N'308542623', N'Harold', N'kimvette@sbcglobal.net', N'8937 Fairway Dr. Xenia OH 45385')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (63, N'308542624', N'Carl', N'majordick@icloud.com', N'9900 Wayne Drive Fleming Island FL 32003')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (64, N'308542625', N'Jeremy', N'cisugrad@verizon.net', N'7394 Parker Circle San Antonio TX 78213')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (65, N'308542626', N'Keith', N'dkrishna@att.net', N'47 College St. Zeeland MI 49464')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (66, N'308542627', N'Roger', N'hahiss@mac.com', N'747 Harvard St. Nanuet NY 10954')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (67, N'308542628', N'Gerald', N'mthurn@me.com', N'4 NE. Gates Ave. Cranston RI 02920')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (68, N'308542629', N'Ethan', N'jesse@aol.com', N'76 Edgefield St. Winter Park FL 32792')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (69, N'308542630', N'Arthur', N'heckerman@verizon.net', N'99 Gregory Road Streamwood IL 60107')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (70, N'308542631', N'Terry', N'skajan@sbcglobal.net', N'24 State Drive Longwood FL 32779')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (71, N'308542632', N'Christian', N'frikazoyd@yahoo.com', N'466 Hilltop Lane Fort Lee NJ 07024')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (72, N'308542633', N'Sean', N'brbarret@mac.com', N'8 Acacia St. Richmond Hill NY 11418')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (73, N'308542634', N'Lawrence', N'british@hotmail.com', N'666 Linden Road Anaheim CA 92806')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (74, N'308542635', N'Austin', N'tkrotchko@icloud.com', N'147 Winchester Road Watertown MA 02472')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (75, N'308542636', N'Joe', N'sburke@mac.com', N'843 Pilgrim St. Plattsburgh NY 12901')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (76, N'308542637', N'Noah', N'frederic@aol.com', N'112 Greenrose St. West Hempstead NY 11552')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (77, N'308542638', N'Jesse', N'jdhildeb@verizon.net', N'3 Golf Street Norristown PA 19401')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (78, N'308542639', N'Albert', N'codex@yahoo.com', N'722 Shady Dr. Dracut MA 01826')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (79, N'308542640', N'Bryan', N'marioph@outlook.com', N'882 Bay Street Carmel NY 10512')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (80, N'308542641', N'Billy', N'bogjobber@msn.com', N'413 North Blue Spring Street Greensboro NC 27405 768 Foster Street')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (81, N'308542642', N'Bruce', N'wilsonpm@icloud.com', N'Norwich CT 06360 9135 South New St.')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (82, N'308542643', N'Willie', N'keutzer@comcast.net', N'Muscatine IA 52761 ')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (83, N'308542644', N'Jordan', N'studyabr@comcast.net', N'747 N. Monroe Street Petersburg VA 23803')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (84, N'308542645', N'Dylan', N'bebing@yahoo.ca', N'4 Saxton Ave. Lacey WA 98503')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (85, N'308542646', N'Alan', N'meder@mac.com', N'445 Blue Spring Street Henderson KY 42420')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (86, N'308542647', N'Ralph', N'sherzodr@me.com', N'1 East Belmont St. Pottstown PA 19464')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (87, N'308542648', N'Gabriel', N'maratb@hotmail.com', N'363 Illinois Avenue Rockford MI 49341')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (88, N'308542649', N'Roy', N'martyloo@icloud.com', N'10 Old Ivy St. West Deptford NJ 08096')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (89, N'308542650', N'Juan', N'rnewman@hotmail.com', N'9926 Squaw Creek St.')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (90, N'308542651', N'Wayne', N'raides@yahoo.ca', N'Endicott NY 13760 996 Hamilton Drive Mahopac NY 10541')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (91, N'308542652', N'Eugene', N'wayward@att.net', N'9455 Pendergast Street Torrance CA 90505')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (92, N'308542653', N'Logan', N'scottzed@sbcglobal.net', N'8134 Eagle Court New Rochelle NY 10801')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (93, N'308542654', N'Randy', N'adillon@yahoo.ca', N'52 Clay Ave. Worcester MA 01604')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (94, N'308542655', N'Louis', N'glenz@comcast.net', N'9759 Lexington St. Dunedin FL 34698')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (95, N'308542656', N'Russell', N'jaxweb@gmail.com', N'8813 North Pine Drive North Miami Beach FL 33160')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (96, N'308542657', N'Vincent', N'wsnyder@optonline.net', N'53 South Elm Dr. Bradenton FL 34203')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (97, N'308542658', N'Philip', N'themer@icloud.com', N'121 Windsor Lane Hollis NY 11423')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (98, N'308542659', N'Bobby', N'phizntrg@icloud.com', N'439 Thompson Street Deland FL 32720')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (99, N'308542660', N'Johnny', N'reeds@gmail.com', N'62 South Schoolhouse Dr. Amsterdam NY 12010')
GO
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (100, N'308542661', N'Bradley', N'sbmrjbr@att.net', N'229 Shipley St. East Haven CT 06512')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (103, N'308542662', N'Ava', N'campbell@comcast.net', N'830 Church Road Aliquippa PA 15001')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (104, N'308542663', N' Isabella', N'sravani@yahoo.com', N'763 Crescent St. Waukesha WI 53186')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (105, N'308542664', N' Sophia', N'philb@gmail.com', N'95 Colonial Lane Ringgold GA 30736')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (106, N'308542665', N' Charlotte', N'boomzilla@att.net', N'933 Rockledge Court Derry NH 03038')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (107, N'308542666', N' Mia', N'mhassel@gmail.com', N'739 South Leatherwood Lane Owensboro KY 42301')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (108, N'308542667', N' Amelia', N'zeitlin@mac.com', N'8186 NE. Wild Horse Drive Malvern PA 19355')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (109, N'308542668', N' Harper', N'seemant@optonline.net', N'8829 Green Hill Avenue Green Cove Springs FL 32043')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (110, N'308542669', N' Evelyn', N'iapetus@outlook.com', N'43 W. Pawnee Road Kent OH 44240')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (111, N'308542670', N' Abigail', N'qrczak@outlook.com', N'9495 Longbranch Ave. Fargo ND 58102')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (112, N'308542671', N' Emily', N'cyrus@me.com', N'208 Roehampton St. Shirley NY 11967')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (113, N'308542672', N' Elizabeth', N'ehood@yahoo.com', N'7023 Wintergreen Road Monsey NY 10952')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (114, N'308542673', N' Mila', N'baveja@optonline.net', N'9465 Peninsula Dr. West Lafayette IN 47906')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (115, N'308542674', N'Ella', N'eimear@yahoo.ca', N'286 Pulaski Ave. Glasgow KY 42141')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (116, N'308542675', N' Avery', N'psichel@msn.com', N'9079 Thorne Drive Marysville OH 43040')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (117, N'308542676', N' Sofia', N'saridder@icloud.com', N'229 Mammoth Lane Ottumwa IA 52501')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (118, N'308542677', N' Camila', N'ribet@outlook.com', N'7403 Brickyard St. Pelham AL 35124')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (119, N'308542678', N' Aria', N'bancboy@yahoo.ca', N'43 Nichols Street Levittown NY 11756')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (120, N'308542679', N' Scarlett', N'zeller@att.net', N'285 Brickell Drive Pickerington OH 43147')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (121, N'308542680', N' Victoria', N'hikoza@sbcglobal.net', N'660 Pearl St. Brooklyn NY 11201')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (122, N'308542681', N' Madison', N'jemarch@msn.com', N'7355 Charles Street Piqua OH 45356')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (123, N'308542682', N' Luna', N'timtroyr@aol.com', N'8697 Marlborough Drive Buckeye AZ 85326')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (124, N'308542683', N' Grace', N'mkearl@live.com', N'9471 Edgewater St. Erie PA 16506')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (125, N'308542684', N' Chloe', N'policies@hotmail.com', N'267 East Bear Hill St. Olney MD 20832')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (126, N'308542685', N' Penelope', N'kspiteri@gmail.com', N'5 Selby St. Glendale Heights IL 60139')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (127, N'308542686', N' Layla', N'fraser@sbcglobal.net', N'7718 Riverview Drive Little Falls NJ 07424')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (128, N'308542687', N' Riley', N'report@live.com', N'27 S. Cypress St. San Diego CA 92111')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (129, N'308542688', N' Zoey', N'sakusha@yahoo.ca', N'7449 SW. Beach St. South Windsor CT 06074')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (130, N'308542689', N' Nora', N'grady@hotmail.com', N'681 Swanson Ave. Corpus Christi TX 78418')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (131, N'308542690', N' Lily', N'carreras@comcast.net', N'969 Newbridge Lane Duluth GA 30096')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (132, N'308542691', N' Eleanor', N'morain@yahoo.com', N'20 W. Longfellow Lane Ankeny IA 50023')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (133, N'308542692', N' Hannah', N'msloan@me.com', N'9362 Bayport Court Suitland MD 20746')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (134, N'308542693', N' Lillian', N'dkrishna@mac.com', N'9398 Grand St. Bristol CT 06010')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (135, N'308542694', N' Addison', N'fukuchi@yahoo.com', N'475 Hartford St. Venice FL 34293')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (136, N'308542695', N' Aubrey', N'webdragon@sbcglobal.net', N'8649 Henry Smith Ave. West Fargo ND 58078')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (137, N'308542696', N' Ellie', N'dwheeler@verizon.net', N'8636 El Dorado Ave. Torrington CT 06790')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (138, N'308542697', N' Stella', N'choset@gmail.com', N'977 Beechwood Street Annapolis MD 21401')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (139, N'308542698', N' Natalie', N'dartlife@outlook.com', N'76 Brewery Street Soddy Daisy TN 37379')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (140, N'308542699', N' Zoe', N'barnett@icloud.com', N'7683 Highland Street Tallahassee FL 32303')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (141, N'308542700', N' Leah', N'frikazoyd@aol.com', N'9802 Talbot Street Gastonia NC 28052')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (142, N'308542701', N' Hazel', N'mcnihil@att.net', N'383 Trout St. Rapid City SD 57701')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (143, N'308542702', N' Violet', N'goldberg@yahoo.com', N'188 W. Ridgewood Avenue Beachwood OH 44122')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (144, N'308542703', N' Aurora', N'hstiles@yahoo.com', N'674 Arlington Court New Hyde Park NY 11040')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (145, N'308542704', N' Savannah', N'schwaang@yahoo.ca', N'13 Airport Ave. Natchez MS 39120')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (146, N'308542705', N' Audrey', N'mfleming@live.com', N'8453 Ocean Street Lorain OH 44052')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (147, N'308542706', N' Brooklyn', N'dsugal@gmail.com', N'9563 South Pineknoll Dr. Dorchester MA 02125')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (148, N'308542707', N' Bella', N'bdthomas@outlook.com', N'941 Poor House Lane Canonsburg PA 15317')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (149, N'308542708', N' Claire', N'nichoj@comcast.net', N'8735 Blue Spring Ave. Charlotte NC 28205')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (150, N'308542709', N' Skylar', N'ianbuck@icloud.com', N'9227 Marvon St. Middleburg FL 32068')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (151, N'308542710', N' Lucy', N'xtang@mac.com', N'16 Fieldstone Lane New City NY 10956')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (152, N'308542711', N' Paisley', N'bcevc@icloud.com', N'7830 E. Highland Rd. Jonesboro GA 30236')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (153, N'308542712', N' Everly', N'telbij@sbcglobal.net', N'8452 Andover Ave. Matawan NJ 07747')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (154, N'308542713', N' Anna', N'dwendlan@live.com', N'66 Elizabeth Streetv Yakima WA 98908')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (155, N'308542714', N' Caroline', N'jnolan@hotmail.com', N'8513 E. Valley Dr. Haines City FL 33844')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (156, N'308542715', N' Nova', N'bhima@comcast.net', N'7500 Philmont Street Anchorage AK 99504')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (157, N'308542716', N' Genesis', N'squirrel@optonline.net', N'7429 Alderwood Lane Myrtle Beach SC 29577')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (158, N'308542717', N' Emilia', N'dbrobins@aol.com', N'203 Mayflower Drive Ashland OH 44805')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (159, N'308542718', N' Kennedy', N'rgarcia@aol.com', N'7511 SE. Jefferson Ave. Albany NY 12203')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (160, N'308542719', N' Samantha', N'denton@live.com', N'7 Eagle Ave. Augusta GA 30906')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (161, N'308542720', N' Maya', N'godeke@outlook.com', N'673 Logan Ave. Klamath Falls OR 97603')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (162, N'308542721', N' Willow', N'eurohack@gmail.com', N'706 W. Fifth Street Yorktown Heights NY 10598')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (163, N'308542722', N' Kinsley', N'seebs@hotmail.com', N'228 Philmont Dr. Boynton Beach FL 33435')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (164, N'308542723', N' Naomi', N'seano@icloud.com', N'185 King Lane Niles MI 49120')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (165, N'308542724', N' Aaliyah', N'jaarnial@verizon.net', N'7675 Poplar Road Elkhart IN 46514')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (166, N'308542725', N' Elena', N'ianbuck@mac.com', N'9264 Trenton St. Carpentersville IL 60110')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (167, N'308542726', N' Sarah', N'ovprit@att.net', N'8426 High Point Avenue Chandler AZ 85224')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (168, N'308542727', N' Ariana', N'pappp@yahoo.ca', N'8481 West Somerset St. Ft Mitchell KY 41017')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (169, N'308542728', N' Allison', N'leakin@hotmail.com', N'932 Pawnee St. Syosset NY 11791')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (170, N'308542729', N' Gabriella', N'grinder@mac.com', N'775 Manchester St. Calumet City IL 60409')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (171, N'308542730', N'Alice', N'galbra@optonline.net', N'28 Woodland Dr. Fuquay Varina NC 27526')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (172, N'308542731', N' Madelyn', N'hoangle@sbcglobal.net', N'78 Blue Spring Street Miami Gardens FL 33056')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (173, N'308542732', N' Cora', N'yruan@mac.com', N'371 Oakland Street West Orange NJ 07052')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (174, N'308542733', N' Ruby', N'pthomsen@verizon.net', N'8027 S. Taylor Street Maryville TN 37803')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (175, N'308542734', N'Eva', N'zavadsky@comcast.net', N'14 Philmont St. Manahawkin NJ 08050')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (176, N'308542735', N' Serenity', N'thurston@gmail.com', N'9440 Trusel Ave. West Islip NY 11795')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (177, N'308542736', N' Autumn', N'vganesh@aol.com', N'71 Boston Ave. Twin Falls ID 83301')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (178, N'308542737', N' Adeline', N'itstatus@yahoo.ca', N'501 N. Clay Drive Orange Park FL 32065')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (179, N'308542738', N' Hailey', N'facet@comcast.net', N'8658 Harvey St. Irwin PA 15642')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (180, N'308542739', N' Gianna', N'multiplx@mac.com', N'7794 Vale St. Flint MI 48504')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (181, N'308542740', N' Valentina', N'jbearp@sbcglobal.net', N'371B Galvin Lane Saint Louis MO 63109')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (182, N'308542741', N'Isla', N'marioph@aol.com', N'9646 Piper Lane Huntsville AL 35803')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (183, N'308542742', N' Eliana', N'crobles@hotmail.com', N'8541 Rosewood Street Port Orange FL 32127')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (184, N'308542743', N' Quinn', N'mfleming@sbcglobal.net', N'8957 River Dr. Florence SC 29501')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (185, N'308542744', N' Nevaeh', N'kmiller@icloud.com', N'66 Alton Street De Pere WI 54115')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (186, N'308542745', N'Ivy', N'crandall@att.net', N'361 York Lane Loveland OH 45140')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (187, N'308542746', N' Sadie', N'vlefevre@msn.com', N'857 South Street Palm Coast FL 32137')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (188, N'308542747', N' Piper', N'fudrucker@optonline.net', N'9695 Laurel Dr. Fayetteville NC 28303')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (189, N'308542748', N' Lydia', N'attwood@yahoo.ca', N'8978 Pearl Lane Orange NJ 07050')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (190, N'308542749', N' Alexa', N'miami@yahoo.com', N'764 Glenwood Street Port Huron MI 48060')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (191, N'308542750', N' Josephine', N'dogdude@yahoo.com', N'23 Carriage Ave. Saint Cloud MN 56301')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (192, N'308542751', N' Emery', N'credmond@verizon.net', N'8658 Beacon Street La Vergne TN 37086')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (193, N'308542752', N' Julia', N'akoblin@yahoo.ca', N'77 East Nut Swamp Rd. North Andover MA 01845')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (194, N'308542753', N' Delilah', N'qrczak@comcast.net', N'8491 Roosevelt Ave. Westford MA 01886')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (195, N'308542754', N' Arianna', N'arebenti@icloud.com', N'103 Bow Ridge Court Circle Pines MN 55014')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (196, N'308542755', N' Vivian', N'sfoskett@yahoo.com', N'8845 Lancaster Street Charlottesville VA 22901')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (197, N'308542756', N' Kaylee', N'daveewart@aol.com', N'415 North Grove St. Wappingers Falls NY 12590')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (198, N'308542757', N' Sophie', N'hikoza@verizon.net', N'77 Walnutwood Ave. Powhatan VA 23139')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (199, N'308542758', N' Brielle', N'bsikdar@outlook.com', N'2 3rd Road Jersey City NJ 07302')
INSERT [dbo].[Customers] ([ID], [CustomerID], [CustomerName], [CustomerEmail], [CustomerAdress]) VALUES (200, N'308542759', N' Madeline', N'fbriere@me.com', N'436 Foster St. Tewksbury MA 01876')
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Customer__3A0CE74C30393961]    Script Date: 28/06/2020 12:39:28 AM ******/
ALTER TABLE [dbo].[Customers] ADD UNIQUE NONCLUSTERED 
(
	[CustomerEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Customer__A4AE64B9CD33EED6]    Script Date: 28/06/2020 12:39:28 AM ******/
ALTER TABLE [dbo].[Customers] ADD UNIQUE NONCLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[AddCustomer]    Script Date: 28/06/2020 12:39:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[AddCustomer]

		@CustomerID NVARCHAR(255),
		@CustomerName NVARCHAR(255),
		@CustomerEmail NVARCHAR(255),
		@CustomerAdress NVARCHAR(255)
AS


BEGIN
		   
		   IF NOT EXISTS (SELECT * FROM [dbo].[Customers]
                   WHERE CustomerID = @CustomerID)

		   BEGIN
				IF NOT EXISTS (SELECT * FROM [dbo].[Customers]
					   WHERE CustomerEmail = @CustomerEmail)

			   BEGIN
					INSERT INTO [dbo].[Customers] (CustomerID, CustomerName, CustomerEmail, CustomerAdress)
					  VALUES (@CustomerID, @CustomerName, @CustomerEmail, @CustomerAdress)
			   END

			   ELSE 
				SELECT 2 as DuplicateError;
			   
		   END
				
		   ELSE
			SELECT 1 as DuplicateError;
END
GO
/****** Object:  StoredProcedure [dbo].[DeleteCustomer]    Script Date: 28/06/2020 12:39:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[DeleteCustomer]

		@CustomerID NVARCHAR(255)
AS

BEGIN
	DELETE FROM [dbo].[Customers]
	WHERE CustomerID = @CustomerID
END

select count(*) from [dbo].[Customers]
GO
/****** Object:  StoredProcedure [dbo].[GetCustomers_ASC]    Script Date: 28/06/2020 12:39:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[GetCustomers_ASC]  
 @PageNumber INT,  
 @PageSize INT,
 @SortColumn NVARCHAR(255)

As  

Begin  
	-- SELECT * FROM Customers ORDER BY ID DESC OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY; 
	 SELECT * FROM Customers ORDER BY 
								CASE WHEN @SortColumn='ID' THEN Customers.ID END ASC,
								CASE WHEN @SortColumn='CustomerName' THEN Customers.CustomerName END ASC,
								CASE WHEN @SortColumn='CustomerEmail' THEN Customers.CustomerEmail END ASC
	   OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY; 
	 --SELECT count(*) as totalCustomersCount FROM Customers;  
End  
GO
/****** Object:  StoredProcedure [dbo].[GetCustomers_DESC]    Script Date: 28/06/2020 12:39:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE      PROCEDURE [dbo].[GetCustomers_DESC]  
 @PageNumber INT,  
 @PageSize INT,
 @SortColumn NVARCHAR(255)

As  

Begin  
	-- SELECT * FROM Customers ORDER BY ID DESC OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY; 
	 SELECT * FROM Customers ORDER BY 
								CASE WHEN @SortColumn='ID' THEN Customers.ID END DESC,
								CASE WHEN @SortColumn='CustomerName' THEN Customers.CustomerName END DESC,
								CASE WHEN @SortColumn='CustomerEmail' THEN Customers.CustomerEmail END DESC
	   OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY; 
	 SELECT count(*) as totalCustomersCount FROM Customers;  
End  
GO
/****** Object:  StoredProcedure [dbo].[GetTotalCustomers]    Script Date: 28/06/2020 12:39:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[GetTotalCustomers]  

As  

Begin 
	 SELECT count(*) as totalCustomersCount FROM Customers;  
End  
GO
USE [master]
GO
ALTER DATABASE [CustomersProj] SET  READ_WRITE 
GO
