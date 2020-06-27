USE [CustomersProj]
GO
/****** Object:  StoredProcedure [dbo].[GetCustomers_ASC]    Script Date: 27/06/2020 11:09:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER    PROCEDURE [dbo].[GetCustomers_ASC]  
 @PageNumber INT,  
 @PageSize INT,
 @SortColumn NVARCHAR(255)

As  

Begin  
	-- SELECT * FROM Customers ORDER BY ID DESC OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY; 
	 SELECT * FROM Customers ORDER BY 
								CASE WHEN @SortColumn='ID' THEN Customers.ID END,
								CASE WHEN @SortColumn='CustomerID' THEN Customers.CustomerID END,
								CASE WHEN @SortColumn='CustomerEmail' THEN Customers.CustomerEmail END
	  ASC OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY; 
	 SELECT count(*) as totalCustomersCount FROM Customers;  
End  
