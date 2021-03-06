USE [master]
GO
/****** Object:  Database [ShopProj]    Script Date: 02/06/2020 08:07:56 PM ******/
CREATE DATABASE [ShopProj]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ShopProj', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ShopProj.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ShopProj_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ShopProj_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [ShopProj] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ShopProj].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ShopProj] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ShopProj] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ShopProj] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ShopProj] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ShopProj] SET ARITHABORT OFF 
GO
ALTER DATABASE [ShopProj] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ShopProj] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ShopProj] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ShopProj] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ShopProj] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ShopProj] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ShopProj] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ShopProj] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ShopProj] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ShopProj] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ShopProj] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ShopProj] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ShopProj] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ShopProj] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ShopProj] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ShopProj] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ShopProj] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ShopProj] SET RECOVERY FULL 
GO
ALTER DATABASE [ShopProj] SET  MULTI_USER 
GO
ALTER DATABASE [ShopProj] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ShopProj] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ShopProj] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ShopProj] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ShopProj] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ShopProj', N'ON'
GO
ALTER DATABASE [ShopProj] SET QUERY_STORE = OFF
GO
USE [ShopProj]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ItemID] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [varchar](255) NOT NULL,
	[ProductPicturePath] [varchar](255) NULL,
	[ProductPrice] [float] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShoppingList]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShoppingList](
	[ShoppingListID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [varchar](255) NOT NULL,
	[Status] [int] NOT NULL,
	[TotalPrice] [float] NOT NULL,
 CONSTRAINT [PK_ShoppingList] PRIMARY KEY CLUSTERED 
(
	[ShoppingListID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShoppingListDetails]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShoppingListDetails](
	[ShoppingListID] [int] NOT NULL,
	[ItemID] [int] NOT NULL,
	[Quantity] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Status]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Status](
	[StatusID] [int] NOT NULL,
	[StatusDescription] [varchar](255) NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED 
(
	[StatusID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserLoginDetails]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserLoginDetails](
	[UserID] [varchar](255) NOT NULL,
	[Password] [varchar](255) NOT NULL,
 CONSTRAINT [PK_UserLoginDetails] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserID] [varchar](255) NOT NULL,
	[FirstName] [varchar](255) NOT NULL,
	[LastName] [varchar](255) NOT NULL,
	[CreditCardNumber] [varchar](255) NOT NULL,
	[CvvNumber] [varchar](255) NOT NULL,
	[Address] [varchar](255) NULL,
	[ExpiredInDate] [datetime2](0) NULL,
	[LastLoginDate] [datetime2](0) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([ItemID], [ProductName], [ProductPicturePath], [ProductPrice]) VALUES (1, N'Pasta ', N'https://upload.wikimedia.org/wikipedia/commons/f/fc/Strozzapreti_Pasta.JPG', 25)
INSERT [dbo].[Products] ([ItemID], [ProductName], [ProductPicturePath], [ProductPrice]) VALUES (2, N'Bread', N'https://upload.wikimedia.org/wikipedia/commons/7/71/Anadama_bread_%281%29.jpg', 10)
INSERT [dbo].[Products] ([ItemID], [ProductName], [ProductPicturePath], [ProductPrice]) VALUES (3, N'Banana', N'https://www.jquery-az.com/html/images/banana.jpg', 12.5)
INSERT [dbo].[Products] ([ItemID], [ProductName], [ProductPicturePath], [ProductPrice]) VALUES (4, N'Eggs', N'https://upload.wikimedia.org/wikipedia/commons/1/12/6-Pack-Chicken-Eggs.jpg', 9)
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
INSERT [dbo].[Status] ([StatusID], [StatusDescription]) VALUES (0, N'InProgress')
INSERT [dbo].[Status] ([StatusID], [StatusDescription]) VALUES (1, N'Done')
GO
INSERT [dbo].[UserLoginDetails] ([UserID], [Password]) VALUES (N'307171462', N'123456')
GO
INSERT [dbo].[Users] ([UserID], [FirstName], [LastName], [CreditCardNumber], [CvvNumber], [Address], [ExpiredInDate], [LastLoginDate]) VALUES (N'307171462', N'Vadim', N'Pik', N'123456', N'123', N'Tiumkin Zeev. Beer-Sheva', CAST(N'2030-04-10T00:00:00.0000000' AS DateTime2), CAST(N'2020-05-30T10:00:00.0000000' AS DateTime2))
GO
ALTER TABLE [dbo].[ShoppingList]  WITH CHECK ADD  CONSTRAINT [FK_ShoppingList_Status] FOREIGN KEY([Status])
REFERENCES [dbo].[Status] ([StatusID])
GO
ALTER TABLE [dbo].[ShoppingList] CHECK CONSTRAINT [FK_ShoppingList_Status]
GO
ALTER TABLE [dbo].[ShoppingList]  WITH CHECK ADD  CONSTRAINT [FK_ShoppingList_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[ShoppingList] CHECK CONSTRAINT [FK_ShoppingList_Users]
GO
ALTER TABLE [dbo].[ShoppingListDetails]  WITH CHECK ADD  CONSTRAINT [FK_ShoppingListDetails_Products] FOREIGN KEY([ItemID])
REFERENCES [dbo].[Products] ([ItemID])
GO
ALTER TABLE [dbo].[ShoppingListDetails] CHECK CONSTRAINT [FK_ShoppingListDetails_Products]
GO
ALTER TABLE [dbo].[ShoppingListDetails]  WITH CHECK ADD  CONSTRAINT [FK_ShoppingListDetails_ShoppingList] FOREIGN KEY([ShoppingListID])
REFERENCES [dbo].[ShoppingList] ([ShoppingListID])
GO
ALTER TABLE [dbo].[ShoppingListDetails] CHECK CONSTRAINT [FK_ShoppingListDetails_ShoppingList]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_UserLoginDetails] FOREIGN KEY([UserID])
REFERENCES [dbo].[UserLoginDetails] ([UserID])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_UserLoginDetails]
GO
/****** Object:  StoredProcedure [dbo].[AddProduct]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[AddProduct]

		@UserID NVARCHAR(255),
		@ShoppingListID int,
		@ItemID int,
		@Quantity int,
		@productPrice float,
		@Status int
AS

DECLARE @TotalPrice float, @TotalPriceUpdated float
SET @TotalPriceUpdated = 0;
------If ShoppingList already exists - calculate the new totalPrice-------
IF (@ShoppingListID <> 0) 
	BEGIN	

		SET @TotalPrice = (	SELECT TotalPrice
							FROM [dbo].[ShoppingList] sl
							WHERE	(sl.ShoppingListID = @ShoppingListID) AND (sl.UserId = @UserID))


		SET @TotalPriceUpdated = (@productPrice * @Quantity) + @TotalPrice

		
	--	INSERT INTO [dbo].[ShoppingList] (TotalPrice)
	--		VALUES (@TotalPriceUpdated)

		INSERT INTO [dbo].[ShoppingListDetails] (ShoppingListID, ItemId, Quantity)
			VALUES (@ShoppingListID, @ItemID, @Quantity)
	END 

ELSE 
------If ShoppingList don`t exists - create new ShoppingListID-------
	BEGIN
		SET @TotalPriceUpdated = (@productPrice * @Quantity)

		INSERT INTO [dbo].[ShoppingList] (UserID, Status, TotalPrice)
			VALUES (@UserID, @Status, @TotalPriceUpdated)

		SET @ShoppingListID = (SELECT TOP(1) sl.ShoppingListID
						   FROM	[dbo].[ShoppingList] sl
						   WHERE (sl.UserID = @UserID)
						   ORDER BY sl.ShoppingListID DESC)

		INSERT INTO [dbo].[ShoppingListDetails] (ShoppingListID, ItemId, Quantity)
			VALUES (@ShoppingListID, @ItemID, @Quantity)
 
	END


SELECT @ShoppingListID as ShoppingListID


GO
/****** Object:  StoredProcedure [dbo].[AuthenticateLogIn]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[AuthenticateLogIn]
	@UserName NVARCHAR(MAX),
	@Password NVARCHAR(MAX)
AS

CREATE TABLE #UserAuthenticate(
	UserName VARCHAR(255)
)

INSERT INTO #UserAuthenticate(UserName)
SELECT DISTINCT UserID
FROM [dbo].[UserLoginDetails] uld
WHERE	(uld.UserID = @UserName) AND (uld.Password = @Password)
		

------If User Authenticated- return all user details-------
IF (SELECT COUNT(1) FROM #UserAuthenticate) > 0 
	BEGIN	
		SELECT users.UserID, users.FirstName, users.LastName, users.Address, users.CreditCardNumber, users.CvvNumber, users.ExpiredInDate, users.LastLoginDate 
		FROM	[dbo].[Users] users
		INNER JOIN #UserAuthenticate
			ON (users.UserID = #UserAuthenticate.UserName)
		RETURN
	END 

ELSE 
	-----------Return Empty result, User Not Found or Bad UserName/Password--------------
	SELECT TOP 0 * FROM [dbo].[Users]
	RETURN




--SELECT	UserID
--FROM	UserLoginDetails
--WHERE	(UserID = '307171462') AND (Password = '123456')



--SELECT	UserID, FirstName, LastName, CreditCardNumber, CvvNumber, ExpiredInDate
--FROM	Users
--WHERE	(UserID = '307171462')
GO
/****** Object:  StoredProcedure [dbo].[DeleteProduct]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[DeleteProduct]

		@UserID NVARCHAR(255),
		@ShoppingListID int,
		@ItemID int,
		@Quantity int
AS


DELETE FROM [dbo].[ShoppingListDetails] 
WHERE (ShoppingListID = @ShoppingListID) AND (ItemID = @ItemID);

SELECT @UserID as  userID
GO
/****** Object:  StoredProcedure [dbo].[GetProducts]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[GetProducts]

AS

SELECT	*
FROM	Products
GO
/****** Object:  StoredProcedure [dbo].[GetShoppingListProducts]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[GetShoppingListProducts]
	@UserID NVARCHAR(255)

AS

SELECT sl.ShoppingListID, sld.ItemID,sld.Quantity, prd.ProductName, prd.ProductPicturePath, prd.ProductPrice
FROM	[dbo].[ShoppingList] sl
	INNER JOIN [dbo].[ShoppingListDetails] sld
	ON (sl.ShoppingListID = sld.ShoppingListID)
	AND (sl.UserID = @UserID) AND (sl.Status = 0)

	INNER JOIN [dbo].[Products] prd
	ON ( sld.ItemID = prd.ItemID)
GO
/****** Object:  StoredProcedure [dbo].[UpdateProductQuantity]    Script Date: 02/06/2020 08:07:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[UpdateProductQuantity]

		@ShoppingListID int,
		@ItemID int,
		@Quantity int
AS

UPDATE [dbo].[ShoppingListDetails] 
SET Quantity = @Quantity
WHERE (ShoppingListID = @ShoppingListID) AND (ItemID = @ItemID);

SELECT @ShoppingListID as  ShoppingListID
GO
USE [master]
GO
ALTER DATABASE [ShopProj] SET  READ_WRITE 
GO
