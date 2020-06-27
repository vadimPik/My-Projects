USE [CustomersProj]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER  PROCEDURE [dbo].[GetCustomer_ASC]  
 @PageNumber INT,  
 @PageSize INT,
 @SortColumn NVARCHAR(255)

As  

Begin  
	-- SELECT * FROM Customers ORDER BY ID DESC OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY; 
	 SELECT * FROM Customers ORDER BY CASE @SortColumn
								WHEN 'ID' THEN ID
								WHEN 'CustomerID' THEN CustomerID
								WHEN 'CustomerEmail' THEN CustomerEmail
							END 
	  ASC OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY; 
	 SELECT count(*) as totalCustomersCount FROM Customers;  
End  
