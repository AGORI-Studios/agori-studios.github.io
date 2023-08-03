function readAnnouncements() {
    var announcements = `# Lines that start with # are ignored (Or lines that are empty)
# format must start with DD/MM/YYYY | <message>
# example:
# 01/01/2023 | Happy New Year!

02/08/2023 | Announcements tab is now available! Expect more updates soon!
`;
    var lines = announcements.split("\n");
    var date = new Date();
    var currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    var announcementsTab = document.getElementById("announcementsTab");

    for (var i = 0; i < lines.length; i++) {
      if (lines[i].charAt(0) != "#" && lines[i] != "") {
        var announcement = lines[i].split("|");
        var announcementDate = announcement[0].trim();
        var announcementMessage = announcement[1].trim();

        // Display message in a rounded rectangle as date - message
        announcementsTab.innerHTML += `
        <!--Do not make an alert div, make it a normal div that is customisable-->
        <div id="announcement">
          <strong>${announcementDate}</strong> -- ${announcementMessage}
        </div>
        `;
      }
    }
}

