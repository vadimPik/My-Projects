USE [CustomersProj]
GO
/****** Object:  StoredProcedure [dbo].[GetCustomers]    Script Date: 26/06/2020 09:19:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER   PROCEDURE [dbo].[GetCustomers]  
 @PageNumber INT,  
 @PageSize INT   

As  

Begin  
	 SELECT * FROM Customers ORDER BY ID DESC OFFSET (@PageNumber-1)* @PageSize ROWS FETCH NEXT @PageSize ROWS ONLY;  
	 SELECT count(*) as totalCustomersCount FROM Customers;  
End  
