Styles:

Accent:
#FC4747

BG:
#10141E

#5A698F

BG Secondary:
#161D2F

Text:
#FFFFFF

TEXT:

Font Family: Outfit Light

Heading Large: 32px (Outfit Light) (Character Spacing (AV) = -15,6 in Adobe XD)
Heading Med: 24px (Outfit Light)
Heading S: 24px Outfit Medium
Heading XS: 18px Outfit Medium

Body M - (Outfit Light) 15px
Body S -(Outfit Light) 13px (opacity .75)

TODOS:

Trending CSS / Responsive +
Sign UP / Login CSS +
Connect DB - Populate DB +
Add / Edit Bookmark Data +
Notification / Toaster +
Loading Skeleton +
Search Functions +
Fix jarring Skeleton +
Query Data directly instead of filter/map with JS after getting all the media list. +
Use 3rd party API +
Play Embedded Media +
Login with Social Media +
Add Social Media Acc to users database +
Animations
Pagination.

Login / Logout +
Create userSchema +
Add user to database after login +
Add redirect after login / logout +
Add ways to store users bookmarks and display them +

UPDATE +++
function to add and remove bookmarks of the user:
onClick call function with media ID and userEmail
Find User, check bookmarks array, if ID is there, remove, if not add ID
and save user.

RENDER +++
state of bookmarks should be passed down from the component that gets session info, find user, when passing the list, pass the list of bookmarks, from then, simple method to if array included, media.id, pass true to Star Component.

BOOKMARKS: (use Context API and don't update database)
Only when not logged in.
Initially, get List from from DB and save it into context, and render using this context.
Get initial states of isBookmarked from list. On toggle, update the list, onClient only.

Add Pagination Functionality on TMDB Page (prev ... 3 4 5 ... next)

Optimize and Refactor Whole App Architecture
