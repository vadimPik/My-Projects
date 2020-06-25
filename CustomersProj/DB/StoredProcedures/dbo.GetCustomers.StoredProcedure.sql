USE [CustomersProj]
GO
/****** Object:  StoredProcedure [dbo].[GetCustomers]    Script Date: 24/06/2020 02:48:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER   PROCEDURE [dbo].[GetCustomers]  
 @PageNumber INT,  
 @PageSize INT   

As  

Begin  
	 SELECT * FROM Customers ORDER BY CustomerID OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY;  
	 SELECT count(*) as totalCustomersCount FROM Customers;  
End  
