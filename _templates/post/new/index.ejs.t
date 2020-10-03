---
to: content/blog/<%=new Date().getFullYear()%>/<%=slug%>/index.md
---

---
title: <%=title%>
date: <%=new Date().toISOString().split('T')[0]%>
description: <%=description%>
tags: [<%=tags.split(',')%>]
cover: ../../preview.png
draft: true
---