USE [CustomersProj]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER   PROCEDURE [dbo].[GetCustomers_ASC]  
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
