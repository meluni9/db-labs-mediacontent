# Тестування працездатності системи

Тестування сервісу проводилося за допомогою Postman.

## Запуск сервера

<img src="./media/start.png">

## GET /user

<img src="./media/get_user.png">

## GET /user/:id

<img src="./media/get_user_by_id.png">

## POST /user

<img src="./media/post_user.png">

## PATCH /user/:id

<img src="./media/patch_user.png">

## DELETE /user/:id

<img src="./media/delete_user_part1.png">

<img src="./media/delete_user_part2.png">

## GET /mediacontent

<img src="./media/get_content.png">

## GET /mediacontent/:id

<img src="./media/get_content_by_id.png">

## POST /mediacontent

<img src="./media/post_content.png">

## PATCH /mediacontent/:id

<img src="./media/patch_content.png">

## DELETE /mediacontent/:id

<img src="./media/delete_content_part1.png">

<img src="./media/delete_content_part2.png">

___

## EXCEPTION(User): DataMissingException

<img src="./media/user_DataMissingException.png">

## EXCEPTION(User): AlreadyRegisteredException

<img src="./media/user_AlreadyRegisteredException.png">

## EXCEPTION(User): UserNotFoundException

<img src="./media/user_UserNotFoundException.png">

## EXCEPTION(MediaContent): RequiredFieldsMissingException

<img src="./media/content_RequiredFieldsMissingException.png">

## EXCEPTION(MediaContent): MediaContentNotFoundException

<img src="./media/content_MediaContentNotFoundException.png">

## EXCEPTION(MediaContent): ContentIdExistsException

<img src="./media/content_ContentIdExistsException.png">
