<%@page import="java.net.InetAddress" %>

Hello from <%=InetAddress.getLocalHost().getHostName() %>
at <%=InetAddress.getLocalHost().getHostAddress() %>