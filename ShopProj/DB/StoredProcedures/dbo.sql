USE [ShopProj]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER PROCEDURE dbo.AuthenticateLogIn
	@UserName NVARCHAR(MAX),
	@Password NVARCHAR(MAX)
AS

CREATE TABLE #UserAuthenticate(
	UserName VARCHAR(255)
)

INSERT INTO #UserAuthenticate(UserName)
SELECT DISTINCT UserID
FROM [dbo].[UserLoginDetails] uld
WHERE	(uld.UserID = @UserName) AND (uld.Password = @Password)
		

------If User Authenticated- return all user details-------
IF (SELECT COUNT(1) FROM #UserAuthenticate) > 0 
	BEGIN	
		SELECT users.UserID, users.FirstName, users.LastName, users.Address, users.CreditCardNumber, users.CvvNumber, users.ExpiredInDate, users.LastLoginDate 
		FROM	[dbo].[Users] users
		INNER JOIN #UserAuthenticate
			ON (users.UserID = #UserAuthenticate.UserName)
		RETURN
	END 

ELSE 
	-----------Return Empty result, User Not Found or Bad UserName/Password--------------
	SELECT TOP 0 * FROM [dbo].[Users]
	RETURN




--SELECT	UserID
--FROM	UserLoginDetails
--WHERE	(UserID = '307171462') AND (Password = '123456')



--SELECT	UserID, FirstName, LastName, CreditCardNumber, CvvNumber, ExpiredInDate
--FROM	Users
--WHERE	(UserID = '307171462')