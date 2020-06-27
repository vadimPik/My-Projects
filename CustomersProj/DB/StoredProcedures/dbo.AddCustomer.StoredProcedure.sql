USE [CustomersProj]
GO
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
