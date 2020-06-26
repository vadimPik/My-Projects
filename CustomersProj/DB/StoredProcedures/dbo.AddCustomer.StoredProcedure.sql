USE [CustomersProj]
GO
/****** Object:  StoredProcedure [dbo].[AddCustomer]    Script Date: 26/06/2020 12:43:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER   PROCEDURE [dbo].[AddCustomer]

		@CustomerID NVARCHAR(255),
		@CustomerName NVARCHAR(255),
		@CustomerEmail NVARCHAR(255),
		@CustomerAdress NVARCHAR(255)
AS


BEGIN
		
		INSERT INTO [dbo].[Customers] (CustomerID, CustomerName, CustomerEmail, CustomerAdress)
			VALUES (@CustomerID, @CustomerName, @CustomerEmail, @CustomerAdress)
END


select TOP(1) CustomerID
from [dbo].[Customers]
ORDER BY CustomerID DESC