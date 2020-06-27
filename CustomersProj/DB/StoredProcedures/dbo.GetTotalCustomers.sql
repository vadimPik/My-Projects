USE [CustomersProj]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER   PROCEDURE [dbo].[GetTotalCustomers]  

As  

Begin 
	 SELECT count(*) as totalCustomersCount FROM Customers;  
End  
