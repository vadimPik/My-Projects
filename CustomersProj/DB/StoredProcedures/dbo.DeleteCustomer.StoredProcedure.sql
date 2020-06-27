USE [CustomersProj]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER   PROCEDURE [dbo].[DeleteCustomer]

		@CustomerID NVARCHAR(255)
AS

BEGIN
	DELETE FROM [dbo].[Customers]
	WHERE CustomerID = @CustomerID
END

select count(*) from [dbo].[Customers]