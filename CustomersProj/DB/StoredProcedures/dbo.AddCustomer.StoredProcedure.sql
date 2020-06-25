SET QUOTED_IDENTIFIER ON
GO

ALTER   PROCEDURE [dbo].[AddCustomer]

		@CustomerName NVARCHAR(255),
		@CustomerEmail NVARCHAR(255),
		@CustomerAdress NVARCHAR(255)
AS


BEGIN
		
		INSERT INTO [dbo].[Customers] (CustomerName, CustomerEmail, CustomerAdress)
			VALUES (@CustomerName, @CustomerEmail, @CustomerAdress)
END


select TOP(1) CustomerID
from [dbo].[Customers]
ORDER BY CustomerID DESC

