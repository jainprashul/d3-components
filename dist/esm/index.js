import M,{useEffect as I,useRef as N,useState as j}from"react";import D from"google-map-react";import*as g from"d3";var i=function(){return i=Object.assign||function(M){for(var I,N=1,j=arguments.length;N<j;N++)for(var D in I=arguments[N])Object.prototype.hasOwnProperty.call(I,D)&&(M[D]=I[D]);return M},i.apply(this,arguments)},z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNyA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2ZfNF80KSI+DQo8ZWxsaXBzZSBjeD0iMTMuMTk1MSIgY3k9IjM4LjU2MSIgcng9IjQuMzkwMjQiIHJ5PSIyLjQzOTAyIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEyIi8+DQo8L2c+DQo8bWFzayBpZD0icGF0aC0yLW91dHNpZGUtMV80XzQiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNyIgaGVpZ2h0PSI0MCIgZmlsbD0iYmxhY2siPg0KPHJlY3QgZmlsbD0id2hpdGUiIHdpZHRoPSIyNyIgaGVpZ2h0PSI0MCIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4xOTUxIDM4LjA3MzJDMTIuNjU2MyAzOC4wNzMxIDEyLjIxOTUgMzcuNjM2NCAxMi4yMTk1IDM3LjA5NzZDMTIuMjE5NSAzMC4yOTYxIDguNDE0NTIgMjYuMTI4OSA1LjU2NTY4IDIzLjAwODlDNC43NDU0MiAyMi4xMTA1IDQuMDA0NDIgMjEuMjk5IDMuNDU2MzUgMjAuNTM2NEMxLjkxNDM4IDE4LjQ5NDEgMSAxNS45NTE0IDEgMTMuMTk1MUMxIDYuNDU5OTQgNi40NTk5NCAxIDEzLjE5NTEgMUMxOS45MzAzIDEgMjUuMzkwMiA2LjQ1OTk0IDI1LjM5MDIgMTMuMTk1MUMyNS4zOTAyIDE1Ljk1MjMgMjQuNDc1MiAxOC40OTU5IDIyLjkzMjMgMjAuNTM4NUMyMi4zODQzIDIxLjMwMDUgMjEuNjQ0IDIyLjExMTQgMjAuODI0NSAyMy4wMDg5QzE3Ljk3NTcgMjYuMTI4OSAxNC4xNzA3IDMwLjI5NjEgMTQuMTcwNyAzNy4wOTc2QzE0LjE3MDcgMzcuNjM2NCAxMy43MzM5IDM4LjA3MzEgMTMuMTk1MSAzOC4wNzMyIi8+DQo8L21hc2s+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE5NTEgMzguMDczMkMxMi42NTYzIDM4LjA3MzEgMTIuMjE5NSAzNy42MzY0IDEyLjIxOTUgMzcuMDk3NkMxMi4yMTk1IDMwLjI5NjEgOC40MTQ1MiAyNi4xMjg5IDUuNTY1NjggMjMuMDA4OUM0Ljc0NTQyIDIyLjExMDUgNC4wMDQ0MiAyMS4yOTkgMy40NTYzNSAyMC41MzY0QzEuOTE0MzggMTguNDk0MSAxIDE1Ljk1MTQgMSAxMy4xOTUxQzEgNi40NTk5NCA2LjQ1OTk0IDEgMTMuMTk1MSAxQzE5LjkzMDMgMSAyNS4zOTAyIDYuNDU5OTQgMjUuMzkwMiAxMy4xOTUxQzI1LjM5MDIgMTUuOTUyMyAyNC40NzUyIDE4LjQ5NTkgMjIuOTMyMyAyMC41Mzg1QzIyLjM4NDMgMjEuMzAwNSAyMS42NDQgMjIuMTExNCAyMC44MjQ1IDIzLjAwODlDMTcuOTc1NyAyNi4xMjg5IDE0LjE3MDcgMzAuMjk2MSAxNC4xNzA3IDM3LjA5NzZDMTQuMTcwNyAzNy42MzY0IDEzLjczMzkgMzguMDczMSAxMy4xOTUxIDM4LjA3MzIiIGZpbGw9IiNFQTM1MkIiLz4NCjxwYXRoIGQ9Ik0xMy4xOTUxIDM3LjU3MzJIMTMuMTk1MVYzOC41NzMySDEzLjE5NTFWMzcuNTczMlpNNS41NjU2OCAyMy4wMDg5TDQuODI3MjEgMjMuNjgzMkw0LjgyNzIxIDIzLjY4MzJMNS41NjU2OCAyMy4wMDg5Wk0zLjQ1NjM1IDIwLjUzNjRMNC4yNjgzOCAxOS45NTI4TDQuMjYxNTIgMTkuOTQzMkw0LjI1NDQyIDE5LjkzMzhMMy40NTYzNSAyMC41MzY0Wk0yMi45MzIzIDIwLjUzODVMMjIuMTM0MyAxOS45MzU4TDIyLjEyNzIgMTkuOTQ1MkwyMi4xMjA0IDE5Ljk1NDdMMjIuOTMyMyAyMC41Mzg1Wk0yMC44MjQ1IDIzLjAwODlMMjEuNTYzIDIzLjY4MzJMMjEuNTYzIDIzLjY4MzJMMjAuODI0NSAyMy4wMDg5Wk0xMS4yMTk1IDM3LjA5NzZDMTEuMjE5NSAzOC4xODg2IDEyLjEwNCAzOS4wNzMxIDEzLjE5NSAzOS4wNzMyTDEzLjE5NTEgMzcuMDczMkMxMy4xOTY2IDM3LjA3MzIgMTMuMjAwNiAzNy4wNzM3IDEzLjIwNDkgMzcuMDc1NUMxMy4yMDg2IDM3LjA3NyAxMy4yMTA5IDM3LjA3ODggMTMuMjEyNCAzNy4wODAzQzEzLjIxMzggMzcuMDgxOCAxMy4yMTU2IDM3LjA4NDEgMTMuMjE3MiAzNy4wODc4QzEzLjIxOSAzNy4wOTIxIDEzLjIxOTUgMzcuMDk2IDEzLjIxOTUgMzcuMDk3NkgxMS4yMTk1Wk00LjgyNzIxIDIzLjY4MzJDNy42ODAxNiAyNi44MDc3IDExLjIxOTUgMzAuNzE4MiAxMS4yMTk1IDM3LjA5NzZIMTMuMjE5NUMxMy4yMTk1IDI5Ljg3NDEgOS4xNDg4NyAyNS40NTAxIDYuMzA0MTYgMjIuMzM0Nkw0LjgyNzIxIDIzLjY4MzJaTTIuNjQ0MzEgMjEuMTJDMy4yMzM2NiAyMS45NCA0LjAxOTExIDIyLjc5ODEgNC44MjcyMSAyMy42ODMyTDYuMzA0MTYgMjIuMzM0NkM1LjQ3MTcyIDIxLjQyMjkgNC43NzUxOCAyMC42NTggNC4yNjgzOCAxOS45NTI4TDIuNjQ0MzEgMjEuMTJaTTAgMTMuMTk1MUMwIDE2LjE3NjMgMC45ODk4MDYgMTguOTI5MSAyLjY1ODI3IDIxLjEzODlMNC4yNTQ0MiAxOS45MzM4QzIuODM4OTUgMTguMDU5IDIgMTUuNzI2NSAyIDEzLjE5NTFIMFpNMTMuMTk1MSAwQzUuOTA3NjYgMCAwIDUuOTA3NjYgMCAxMy4xOTUxSDJDMiA3LjAxMjIzIDcuMDEyMjMgMiAxMy4xOTUxIDJWMFpNMjYuMzkwMiAxMy4xOTUxQzI2LjM5MDIgNS45MDc2NiAyMC40ODI2IDAgMTMuMTk1MSAwVjJDMTkuMzc4IDIgMjQuMzkwMiA3LjAxMjIzIDI0LjM5MDIgMTMuMTk1MUgyNi4zOTAyWk0yMy43MzAyIDIxLjE0MTNDMjUuMzk5NyAxOC45MzEgMjYuMzkwMiAxNi4xNzczIDI2LjM5MDIgMTMuMTk1MUgyNC4zOTAyQzI0LjM5MDIgMTUuNzI3NCAyMy41NTA3IDE4LjA2MDcgMjIuMTM0MyAxOS45MzU4TDIzLjczMDIgMjEuMTQxM1pNMjEuNTYzIDIzLjY4MzJDMjIuMzcwMyAyMi43OTg5IDIzLjE1NSAyMS45NDE2IDIzLjc0NDIgMjEuMTIyNEwyMi4xMjA0IDE5Ljk1NDdDMjEuNjEzNyAyMC42NTk0IDIwLjkxNzYgMjEuNDIzOCAyMC4wODYgMjIuMzM0NkwyMS41NjMgMjMuNjgzMlpNMTUuMTcwNyAzNy4wOTc2QzE1LjE3MDcgMzAuNzE4MiAxOC43MSAyNi44MDc3IDIxLjU2MyAyMy42ODMyTDIwLjA4NiAyMi4zMzQ2QzE3LjI0MTMgMjUuNDUwMSAxMy4xNzA3IDI5Ljg3NDEgMTMuMTcwNyAzNy4wOTc2SDE1LjE3MDdaTTEzLjE5NTIgMzkuMDczMkMxNC4yODYyIDM5LjA3MzEgMTUuMTcwNyAzOC4xODg2IDE1LjE3MDcgMzcuMDk3NkgxMy4xNzA3QzEzLjE3MDcgMzcuMDk2IDEzLjE3MTIgMzcuMDkyMSAxMy4xNzMgMzcuMDg3OEMxMy4xNzQ1IDM3LjA4NDEgMTMuMTc2MyAzNy4wODE4IDEzLjE3NzggMzcuMDgwM0MxMy4xNzkzIDM3LjA3ODggMTMuMTgxNiAzNy4wNzcgMTMuMTg1MyAzNy4wNzU1QzEzLjE4OTYgMzcuMDczNyAxMy4xOTM1IDM3LjA3MzIgMTMuMTk1MSAzNy4wNzMyTDEzLjE5NTIgMzkuMDczMloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl80XzQpIiBtYXNrPSJ1cmwoI3BhdGgtMi1vdXRzaWRlLTFfNF80KSIvPg0KPGNpcmNsZSBjeD0iMTMuMzA3NyIgY3k9IjEzLjMwNzciIHI9IjcuNjkyMzEiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNCIvPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfYl80XzQpIj4NCjxwYXRoIGQ9Ik05Ljg4NjM2IDE4SDguNDA5MDlMMTIuNjgxOCA2LjM2MzY0SDE0LjEzNjRMMTguNDA5MSAxOEgxNi45MzE4TDEzLjQ1NDUgOC4yMDQ1NUgxMy4zNjM2TDkuODg2MzYgMThaTTEwLjQzMTggMTMuNDU0NUgxNi4zODY0VjE0LjcwNDVIMTAuNDMxOFYxMy40NTQ1WiIgZmlsbD0id2hpdGUiLz4NCjwvZz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9mXzRfNCIgeD0iNi44MDQ5IiB5PSIzNC4xMjIiIHdpZHRoPSIxMi43ODA1IiBoZWlnaHQ9IjguODc4MDUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzRfNCIvPg0KPC9maWx0ZXI+DQo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2JfNF80IiB4PSI0LjQwOTA5IiB5PSIyLjM2MzY1IiB3aWR0aD0iMTgiIGhlaWdodD0iMTkuNjM2NCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPg0KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4NCjxmZUdhdXNzaWFuQmx1ciBpbj0iQmFja2dyb3VuZEltYWdlIiBzdGREZXZpYXRpb249IjIiLz4NCjxmZUNvbXBvc2l0ZSBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iaW4iIHJlc3VsdD0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1cl80XzQiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1cl80XzQiIHJlc3VsdD0ic2hhcGUiLz4NCjwvZmlsdGVyPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzRfNCIgeDE9IjEzLjE5NTEiIHkxPSIxIiB4Mj0iMTMuMTk1MSIgeTI9IjM4LjA3MzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuMzUiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==",y="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCAyNyA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2ZfNF8xNCkiPg0KPGVsbGlwc2UgY3g9IjEzLjE5NTIiIGN5PSIzOC41NjEiIHJ4PSI0LjM5MDI0IiByeT0iMi40MzkwMiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4xMiIvPg0KPC9nPg0KPG1hc2sgaWQ9InBhdGgtMi1vdXRzaWRlLTFfNF8xNCIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjI3IiBoZWlnaHQ9IjQwIiBmaWxsPSJibGFjayI+DQo8cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjI3IiBoZWlnaHQ9IjQwIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE5NDkgMzguMDczQzEyLjY1NjIgMzguMDcyOSAxMi4yMTk1IDM3LjYzNjEgMTIuMjE5NSAzNy4wOTc0QzEyLjIxOTUgMzAuMjk1OSA4LjQxNDUgMjYuMTI4NyA1LjU2NTY2IDIzLjAwODdDNC43NDY1NiAyMi4xMTE2IDQuMDA2NSAyMS4zMDExIDMuNDU4NjUgMjAuNTM5NEMxLjkxNTI5IDE4LjQ5NjYgMSAxNS45NTI4IDEgMTMuMTk1MUMxIDYuNDU5OTQgNi40NTk5NCAxIDEzLjE5NTEgMUMxOS45MzAzIDEgMjUuMzkwMyA2LjQ1OTk0IDI1LjM5MDMgMTMuMTk1MUMyNS4zOTAzIDE1Ljk1NjIgMjQuNDcyNyAxOC41MDI5IDIyLjkyNTggMjAuNTQ3MUMyMi4zNzg1IDIxLjMwNjUgMjEuNjQwNyAyMi4xMTQ2IDIwLjgyNDMgMjMuMDA4N0MxNy45NzU1IDI2LjEyODcgMTQuMTcwNSAzMC4yOTU5IDE0LjE3MDUgMzcuMDk3NEMxNC4xNzA1IDM3LjYzNjEgMTMuNzMzOCAzOC4wNzI5IDEzLjE5NTEgMzguMDczIi8+DQo8L21hc2s+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE5NDkgMzguMDczQzEyLjY1NjIgMzguMDcyOSAxMi4yMTk1IDM3LjYzNjEgMTIuMjE5NSAzNy4wOTc0QzEyLjIxOTUgMzAuMjk1OSA4LjQxNDUgMjYuMTI4NyA1LjU2NTY2IDIzLjAwODdDNC43NDY1NiAyMi4xMTE2IDQuMDA2NSAyMS4zMDExIDMuNDU4NjUgMjAuNTM5NEMxLjkxNTI5IDE4LjQ5NjYgMSAxNS45NTI4IDEgMTMuMTk1MUMxIDYuNDU5OTQgNi40NTk5NCAxIDEzLjE5NTEgMUMxOS45MzAzIDEgMjUuMzkwMyA2LjQ1OTk0IDI1LjM5MDMgMTMuMTk1MUMyNS4zOTAzIDE1Ljk1NjIgMjQuNDcyNyAxOC41MDI5IDIyLjkyNTggMjAuNTQ3MUMyMi4zNzg1IDIxLjMwNjUgMjEuNjQwNyAyMi4xMTQ2IDIwLjgyNDMgMjMuMDA4N0MxNy45NzU1IDI2LjEyODcgMTQuMTcwNSAzMC4yOTU5IDE0LjE3MDUgMzcuMDk3NEMxNC4xNzA1IDM3LjYzNjEgMTMuNzMzOCAzOC4wNzI5IDEzLjE5NTEgMzguMDczIiBmaWxsPSIjNDc0RUZGIi8+DQo8cGF0aCBkPSJNMTMuMTk1MSAzNy41NzNIMTMuMTk0OVYzOC41NzNIMTMuMTk1MVYzNy41NzNaTTUuNTY1NjYgMjMuMDA4N0w2LjMwNDE0IDIyLjMzNDRMNi4zMDQxNCAyMi4zMzQ0TDUuNTY1NjYgMjMuMDA4N1pNMy40NTg2NSAyMC41Mzk0TDQuMjcwNDcgMTkuOTU1NUw0LjI2MzYyIDE5Ljk0Nkw0LjI1NjU0IDE5LjkzNjZMMy40NTg2NSAyMC41Mzk0Wk0yMi45MjU4IDIwLjU0NzFMMjIuMTI4NCAxOS45NDM2TDIyLjEyMTQgMTkuOTUyOUwyMi4xMTQ2IDE5Ljk2MjRMMjIuOTI1OCAyMC41NDcxWk0yMC44MjQzIDIzLjAwODdMMjAuMDg1OCAyMi4zMzQ0TDIwLjgyNDMgMjMuMDA4N1pNMTEuMjE5NSAzNy4wOTc0QzExLjIxOTUgMzguMTg4MyAxMi4xMDM4IDM5LjA3MjggMTMuMTk0NyAzOS4wNzNMMTMuMTk1MSAzNy4wNzNDMTMuMTk2NiAzNy4wNzMgMTMuMjAwNiAzNy4wNzM1IDEzLjIwNDkgMzcuMDc1M0MxMy4yMDg1IDM3LjA3NjkgMTMuMjEwOSAzNy4wNzg3IDEzLjIxMjMgMzcuMDgwMUMxMy4yMTM4IDM3LjA4MTYgMTMuMjE1NiAzNy4wODM5IDEzLjIxNzIgMzcuMDg3NkMxMy4yMTkgMzcuMDkxOSAxMy4yMTk1IDM3LjA5NTkgMTMuMjE5NSAzNy4wOTc0SDExLjIxOTVaTTQuODI3MTkgMjMuNjgzQzcuNjgwMTQgMjYuODA3NSAxMS4yMTk1IDMwLjcxOCAxMS4yMTk1IDM3LjA5NzRIMTMuMjE5NUMxMy4yMTk1IDI5Ljg3MzkgOS4xNDg4NSAyNS40NDk5IDYuMzA0MTQgMjIuMzM0NEw0LjgyNzE5IDIzLjY4M1pNMi42NDY4NCAyMS4xMjM0QzMuMjM1ODUgMjEuOTQyMiA0LjAyMDIgMjIuNzk5MiA0LjgyNzE5IDIzLjY4M0w2LjMwNDE0IDIyLjMzNDRDNS40NzI5MiAyMS40MjQxIDQuNzc3MTUgMjAuNjYgNC4yNzA0NyAxOS45NTU1TDIuNjQ2ODQgMjEuMTIzNFpNMCAxMy4xOTUxQzAgMTYuMTc3NyAwLjk5MDc5NSAxOC45MzE4IDIuNjYwNzYgMjEuMTQyMkw0LjI1NjU0IDE5LjkzNjZDMi44Mzk3OSAxOC4wNjE0IDIgMTUuNzI3OCAyIDEzLjE5NTFIMFpNMTMuMTk1MSAwQzUuOTA3NjYgMCAwIDUuOTA3NjYgMCAxMy4xOTUxSDJDMiA3LjAxMjIzIDcuMDEyMjMgMiAxMy4xOTUxIDJWMFpNMjYuMzkwMyAxMy4xOTUxQzI2LjM5MDMgNS45MDc2NiAyMC40ODI2IDAgMTMuMTk1MSAwVjJDMTkuMzc4IDIgMjQuMzkwMyA3LjAxMjIzIDI0LjM5MDMgMTMuMTk1MUgyNi4zOTAzWk0yMy43MjMzIDIxLjE1MDVDMjUuMzk3IDE4LjkzODcgMjYuMzkwMyAxNi4xODE1IDI2LjM5MDMgMTMuMTk1MUgyNC4zOTAzQzI0LjM5MDMgMTUuNzMwOSAyMy41NDg0IDE4LjA2NzIgMjIuMTI4NCAxOS45NDM2TDIzLjcyMzMgMjEuMTUwNVpNMjEuNTYyOCAyMy42ODNDMjIuMzY3MiAyMi44MDIgMjMuMTQ4OSAyMS45NDc5IDIzLjczNzEgMjEuMTMxN0wyMi4xMTQ2IDE5Ljk2MjRDMjEuNjA4MSAyMC42NjUxIDIwLjkxNDIgMjEuNDI3MiAyMC4wODU4IDIyLjMzNDRMMjEuNTYyOCAyMy42ODNaTTE1LjE3MDUgMzcuMDk3NEMxNS4xNzA1IDMwLjcxOCAxOC43MDk4IDI2LjgwNzUgMjEuNTYyOCAyMy42ODNMMjAuMDg1OCAyMi4zMzQ0QzE3LjI0MTEgMjUuNDQ5OSAxMy4xNzA1IDI5Ljg3MzkgMTMuMTcwNSAzNy4wOTc0SDE1LjE3MDVaTTEzLjE5NTMgMzkuMDczQzE0LjI4NjIgMzkuMDcyOCAxNS4xNzA1IDM4LjE4ODMgMTUuMTcwNSAzNy4wOTc0SDEzLjE3MDVDMTMuMTcwNSAzNy4wOTU5IDEzLjE3MSAzNy4wOTE5IDEzLjE3MjggMzcuMDg3NkMxMy4xNzQ0IDM3LjA4MzkgMTMuMTc2MiAzNy4wODE2IDEzLjE3NzYgMzcuMDgwMUMxMy4xNzkxIDM3LjA3ODcgMTMuMTgxNCAzNy4wNzY5IDEzLjE4NTEgMzcuMDc1M0MxMy4xODk0IDM3LjA3MzUgMTMuMTkzNCAzNy4wNzMgMTMuMTk0OSAzNy4wNzNMMTMuMTk1MyAzOS4wNzNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNF8xNCkiIG1hc2s9InVybCgjcGF0aC0yLW91dHNpZGUtMV80XzE0KSIvPg0KPGNpcmNsZSBjeD0iMTMuMzA3NyIgY3k9IjEzLjMwNzciIHI9IjcuNjkyMzEiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNCIvPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfYl80XzE0KSI+DQo8cGF0aCBkPSJNOS40MDkwOSAxOVY3LjM2MzY0SDEzLjQ3NzNDMTQuMjg3OSA3LjM2MzY0IDE0Ljk1NjQgNy41MDM3OSAxNS40ODMgNy43ODQwOUMxNi4wMDk1IDguMDYwNjEgMTYuNDAxNSA4LjQzMzcxIDE2LjY1OTEgOC45MDM0MUMxNi45MTY3IDkuMzY5MzIgMTcuMDQ1NSA5Ljg4NjM2IDE3LjA0NTUgMTAuNDU0NUMxNy4wNDU1IDEwLjk1NDUgMTYuOTU2NCAxMS4zNjc0IDE2Ljc3ODQgMTEuNjkzMkMxNi42MDQyIDEyLjAxODkgMTYuMzczMSAxMi4yNzY1IDE2LjA4NTIgMTIuNDY1OUMxNS44MDExIDEyLjY1NTMgMTUuNDkyNCAxMi43OTU1IDE1LjE1OTEgMTIuODg2NFYxM0MxNS41MTUyIDEzLjAyMjcgMTUuODczMSAxMy4xNDc3IDE2LjIzMyAxMy4zNzVDMTYuNTkyOCAxMy42MDIzIDE2Ljg5MzkgMTMuOTI4IDE3LjEzNjQgMTQuMzUyM0MxNy4zNzg4IDE0Ljc3NjUgMTcuNSAxNS4yOTU1IDE3LjUgMTUuOTA5MUMxNy41IDE2LjQ5MjQgMTcuMzY3NCAxNy4wMTcgMTcuMTAyMyAxNy40ODNDMTYuODM3MSAxNy45NDg5IDE2LjQxODYgMTguMzE4MiAxNS44NDY2IDE4LjU5MDlDMTUuMjc0NiAxOC44NjM2IDE0LjUzMDMgMTkgMTMuNjEzNiAxOUg5LjQwOTA5Wk0xMC44MTgyIDE3Ljc1SDEzLjYxMzZDMTQuNTM0MSAxNy43NSAxNS4xODc1IDE3LjU3MiAxNS41NzM5IDE3LjIxNTlDMTUuOTY0IDE2Ljg1NjEgMTYuMTU5MSAxNi40MjA1IDE2LjE1OTEgMTUuOTA5MUMxNi4xNTkxIDE1LjUxNTIgMTYuMDU4NyAxNS4xNTE1IDE1Ljg1OCAxNC44MTgyQzE1LjY1NzIgMTQuNDgxMSAxNS4zNzEyIDE0LjIxMjEgMTUgMTQuMDExNEMxNC42Mjg4IDEzLjgwNjggMTQuMTg5NCAxMy43MDQ1IDEzLjY4MTggMTMuNzA0NUgxMC44MTgyVjE3Ljc1Wk0xMC44MTgyIDEyLjQ3NzNIMTMuNDMxOEMxMy44NTYxIDEyLjQ3NzMgMTQuMjM4NiAxMi4zOTM5IDE0LjU3OTUgMTIuMjI3M0MxNC45MjQyIDEyLjA2MDYgMTUuMTk3IDExLjgyNTggMTUuMzk3NyAxMS41MjI3QzE1LjYwMjMgMTEuMjE5NyAxNS43MDQ1IDEwLjg2MzYgMTUuNzA0NSAxMC40NTQ1QzE1LjcwNDUgOS45NDMxOCAxNS41MjY1IDkuNTA5NDcgMTUuMTcwNSA5LjE1MzQxQzE0LjgxNDQgOC43OTM1NiAxNC4yNSA4LjYxMzY0IDEzLjQ3NzMgOC42MTM2NEgxMC44MTgyVjEyLjQ3NzNaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9nPg0KPGRlZnM+DQo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfNF8xNCIgeD0iNi44MDQ5OSIgeT0iMzQuMTIyIiB3aWR0aD0iMTIuNzgwNSIgaGVpZ2h0PSI4Ljg3ODA1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl80XzE0Ii8+DQo8L2ZpbHRlcj4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjFfYl80XzE0IiB4PSI1LjQwOTA5IiB5PSIzLjM2MzY1IiB3aWR0aD0iMTYuMDkwOSIgaGVpZ2h0PSIxOS42MzY0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlR2F1c3NpYW5CbHVyIGluPSJCYWNrZ3JvdW5kSW1hZ2UiIHN0ZERldmlhdGlvbj0iMiIvPg0KPGZlQ29tcG9zaXRlIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJlZmZlY3QxX2JhY2tncm91bmRCbHVyXzRfMTQiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1cl80XzE0IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl80XzE0IiB4MT0iMTMuMTk1MSIgeTE9IjEiIHgyPSIxMy4xOTUxIiB5Mj0iMzguMDczIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjM1Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPC9kZWZzPg0KPC9zdmc+DQo=",T="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgb3BhY2l0eT0iMC4zIiBjeD0iMTMiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM2MzkzRjIiLz4NCjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RfMTFfNTQ4KSI+DQo8Y2lyY2xlIGN4PSIxMyIgY3k9IjEyIiByPSI1IiBmaWxsPSIjNjM5M0YyIi8+DQo8Y2lyY2xlIGN4PSIxMyIgY3k9IjEyIiByPSI2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4NCjwvZz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzExXzU0OCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+DQo8ZmVPZmZzZXQgZHk9IjEiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMiLz4NCjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE1IDAiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzExXzU0OCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTFfNTQ4IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjwvZGVmcz4NCjwvc3ZnPg0K",c="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCAyNyA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMV80ODEpIj4NCjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2ZfMTFfNDgxKSI+DQo8ZWxsaXBzZSBjeD0iMTMuNSIgY3k9IjM5LjUiIHJ4PSI0LjUiIHJ5PSIyLjUiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMTIiLz4NCjwvZz4NCjxtYXNrIGlkPSJwYXRoLTItb3V0c2lkZS0xXzExXzQ4MSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjI3IiBoZWlnaHQ9IjQwIiBmaWxsPSJibGFjayI+DQo8cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjI3IiBoZWlnaHQ9IjQwIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2IDEzLjVDMjYgMTYuMzI1MyAyNS4wNjI3IDE4LjkzMTYgMjMuNDgyMSAyMS4wMjVDMjIuOTIwMyAyMS44MDY2IDIyLjE2MDkgMjIuNjM4NCAyMS4zMjAyIDIzLjU1OTFDMTguNDAwMSAyNi43NTcxIDE0LjUgMzEuMDI4NSAxNC41IDM4QzE0LjUgMzguNTUyMyAxNC4wNTIzIDM5IDEzLjUgMzlDMTIuOTQ3NyAzOSAxMi41IDM4LjU1MjMgMTIuNSAzOEMxMi41IDMxLjAyODUgOC41OTk4OSAyNi43NTcxIDUuNjc5ODQgMjMuNTU5MUM0LjgzOTE1IDIyLjYzODQgNC4wNzk2OSAyMS44MDY2IDMuNTE3OTMgMjEuMDI1QzEuOTM3MzEgMTguOTMxNiAxIDE2LjMyNTMgMSAxMy41QzEgNi41OTY0NCA2LjU5NjQ0IDEgMTMuNSAxQzIwLjQwMzYgMSAyNiA2LjU5NjQ0IDI2IDEzLjVaIi8+DQo8L21hc2s+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2IDEzLjVDMjYgMTYuMzI1MyAyNS4wNjI3IDE4LjkzMTYgMjMuNDgyMSAyMS4wMjVDMjIuOTIwMyAyMS44MDY2IDIyLjE2MDkgMjIuNjM4NCAyMS4zMjAyIDIzLjU1OTFDMTguNDAwMSAyNi43NTcxIDE0LjUgMzEuMDI4NSAxNC41IDM4QzE0LjUgMzguNTUyMyAxNC4wNTIzIDM5IDEzLjUgMzlDMTIuOTQ3NyAzOSAxMi41IDM4LjU1MjMgMTIuNSAzOEMxMi41IDMxLjAyODUgOC41OTk4OSAyNi43NTcxIDUuNjc5ODQgMjMuNTU5MUM0LjgzOTE1IDIyLjYzODQgNC4wNzk2OSAyMS44MDY2IDMuNTE3OTMgMjEuMDI1QzEuOTM3MzEgMTguOTMxNiAxIDE2LjMyNTMgMSAxMy41QzEgNi41OTY0NCA2LjU5NjQ0IDEgMTMuNSAxQzIwLjQwMzYgMSAyNiA2LjU5NjQ0IDI2IDEzLjVaIiBmaWxsPSIjRUEzNTJCIi8+DQo8cGF0aCBkPSJNMjMuNDgyMSAyMS4wMjVMMjIuNjg0IDIwLjQyMjRMMjIuNjc2OSAyMC40MzE4TDIyLjY3IDIwLjQ0MTRMMjMuNDgyMSAyMS4wMjVaTTIxLjMyMDIgMjMuNTU5MUwyMi4wNTg2IDI0LjIzMzRMMjEuMzIwMiAyMy41NTkxWk01LjY3OTg0IDIzLjU1OTFMNi40MTgzMSAyMi44ODQ4TDYuNDE4MzEgMjIuODg0OEw1LjY3OTg0IDIzLjU1OTFaTTMuNTE3OTMgMjEuMDI1TDQuMzI5OTUgMjAuNDQxNEw0LjMyMzA5IDIwLjQzMThMNC4zMTYgMjAuNDIyNUwzLjUxNzkzIDIxLjAyNVpNMjQuMjgwMSAyMS42Mjc2QzI1Ljk4NzMgMTkuMzY2NiAyNyAxNi41NTAxIDI3IDEzLjVIMjVDMjUgMTYuMTAwNCAyNC4xMzgxIDE4LjQ5NjYgMjIuNjg0IDIwLjQyMjRMMjQuMjgwMSAyMS42Mjc2Wk0yMi4wNTg2IDI0LjIzMzRDMjIuODg3MiAyMy4zMjYgMjMuNjkxMSAyMi40NDc3IDI0LjI5NDEgMjEuNjA4NkwyMi42NyAyMC40NDE0QzIyLjE0OTYgMjEuMTY1NiAyMS40MzQ1IDIxLjk1MDggMjAuNTgxNyAyMi44ODQ4TDIyLjA1ODYgMjQuMjMzNFpNMTUuNSAzOEMxNS41IDMxLjQ1MDYgMTkuMTM0NSAyNy40MzU5IDIyLjA1ODYgMjQuMjMzNEwyMC41ODE3IDIyLjg4NDhDMTcuNjY1OCAyNi4wNzgzIDEzLjUgMzAuNjA2NSAxMy41IDM4SDE1LjVaTTEzLjUgNDBDMTQuNjA0NiA0MCAxNS41IDM5LjEwNDYgMTUuNSAzOEgxMy41VjQwWk0xMS41IDM4QzExLjUgMzkuMTA0NiAxMi4zOTU0IDQwIDEzLjUgNDBWMzhIMTEuNVpNNC45NDEzNiAyNC4yMzM0QzcuODY1NTMgMjcuNDM1OSAxMS41IDMxLjQ1MDYgMTEuNSAzOEgxMy41QzEzLjUgMzAuNjA2NSA5LjMzNDI1IDI2LjA3ODMgNi40MTgzMSAyMi44ODQ4TDQuOTQxMzYgMjQuMjMzNFpNMi43MDU5MSAyMS42MDg3QzMuMzA4OTQgMjIuNDQ3NyA0LjExMjg0IDIzLjMyNiA0Ljk0MTM2IDI0LjIzMzRMNi40MTgzMSAyMi44ODQ4QzUuNTY1NDYgMjEuOTUwOCA0Ljg1MDQ1IDIxLjE2NTYgNC4zMjk5NSAyMC40NDE0TDIuNzA1OTEgMjEuNjA4N1pNMCAxMy41QzAgMTYuNTUwMSAxLjAxMjc0IDE5LjM2NjYgMi43MTk4NyAyMS42Mjc2TDQuMzE2IDIwLjQyMjVDMi44NjE4OCAxOC40OTY2IDIgMTYuMTAwNCAyIDEzLjVIMFpNMTMuNSAwQzYuMDQ0MTYgMCAwIDYuMDQ0MTYgMCAxMy41SDJDMiA3LjE0ODczIDcuMTQ4NzMgMiAxMy41IDJWMFpNMjcgMTMuNUMyNyA2LjA0NDE2IDIwLjk1NTggMCAxMy41IDBWMkMxOS44NTEzIDIgMjUgNy4xNDg3MyAyNSAxMy41SDI3WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzExXzQ4MSkiIG1hc2s9InVybCgjcGF0aC0yLW91dHNpZGUtMV8xMV80ODEpIi8+DQo8Y2lyY2xlIGN4PSIxMy41IiBjeT0iMTMuNSIgcj0iNC41IiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjQiLz4NCjwvZz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9mXzExXzQ4MSIgeD0iNyIgeT0iMzUiIHdpZHRoPSIxMyIgaGVpZ2h0PSI5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMV80ODEiLz4NCjwvZmlsdGVyPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzExXzQ4MSIgeDE9IjEzLjUiIHkxPSIxIiB4Mj0iMTMuNSIgeTI9IjM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjM1Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMV80ODEiPg0KPHJlY3Qgd2lkdGg9IjI3IiBoZWlnaHQ9IjQzIiBmaWxsPSJ3aGl0ZSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg==",a=function(N){var j=N.xdim,g=void 0===j?300:j,T=N.ydim,c=void 0===T?300:T,a=N.center,e=void 0===a?{lat:41.73284437919054,lng:-93.93040700837061}:a,t=N.zoom,l=void 0===t?20:t,A=N.getMapData,n=N.size,x=void 0===n?"medium":n,o=N.showAddressInput,E=void 0===o||o,L=N.apiKey,d={small:23,medium:30,large:40},r=M.useState(e),S=r[0],m=r[1],s=M.useState(l),Z=s[0],C=s[1],O=M.useState(null),Q=O[0],k=O[1],w=M.useState({lat:S.lat- -227e-8,lng:S.lng-131e-6}),U=w[0],Y=w[1],p=M.useState({lat:S.lat- -708e-8,lng:S.lng- -16e-5}),b=p[0],G=p[1];I((function(){Q&&P(S.lat,S.lng).then((function(M){A({center:{lat:S.lat,lng:S.lng,address:M},zoom:Z,markerA:U,markerB:b})}))}),[S,U,b,Z]),I((function(){Q&&e.lat!==S.lat&&e.lng!==S.lng&&(console.log("center changed",S,e),m(e))}),[e]);var W=M.useState(!0),v=W[0],h=W[1],P=function(M,I){var N=new Q.api.Geocoder;return new Promise((function(j,D){var g="";N.geocode({location:{lat:M,lng:I}},(function(M,I){"OK"===I?(console.log(M),M[0]?(g=M[0].formatted_address,j(g)):j(g="No results found")):D(g="Geocoder failed due to: "+I)}))}))};return M.createElement("div",{style:{height:"100%",margin:"2px",width:g}},E&&Q&&M.createElement(u,{map:Q,updatePlace:function(M){if(M.geometry){var I=M.geometry.location.lat(),N=M.geometry.location.lng();m({lat:I,lng:N})}}}),M.createElement("div",{style:{width:g,height:E?c-34:c,border:"1px solid black"}},M.createElement(D,{bootstrapURLKeys:{key:L,libraries:["places"]},draggable:v,center:S,zoom:Z,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(M){var I=M.map,N=M.maps,j=M.ref;console.log(I,N,j),k({apiLoaded:!0,instance:I,api:N,ref:j})},onChange:function(M){var I=M.center,N=M.zoom,j=M.bounds,D=M.marginBounds;console.log(I,N,j,D),m(I),Y({lat:I.lat- -227e-8,lng:I.lng-131e-6}),G({lat:I.lat- -708e-8,lng:I.lng- -16e-5}),C(N)},options:{mapTypeControl:!0,controlSize:20},onChildMouseDown:function(M,I,N){h(!1)},onChildMouseUp:function(M,I,N){h(!0)},onChildClick:function(M,I){console.log("Child click ",M,I)},onChildMouseMove:function(M,I,N){"0"===M&&Y(i({lat:N.lat,lng:N.lng},N)),"1"===M&&G(i({lat:N.lat,lng:N.lng},N))}},M.createElement((function(I){return I.lat,I.lng,M.createElement("img",{src:z,style:{transform:"translate(-".concat(48,"%, -").concat(90,"%)")},height:d[x],alt:"Marker A"})}),{key:0,lat:U.lat,lng:U.lng}),M.createElement((function(I){return I.lat,I.lng,M.createElement("img",{src:y,style:{transform:"translate(-".concat(48,"%, -").concat(90,"%)")},height:d[x],alt:"Marker B"})}),{key:1,lat:b.lat,lng:b.lng}))))},u=function(D){var g=N(null),i=j(""),z=i[0],y=i[1];return I((function(){var M=new D.map.api.places.Autocomplete(g.current,{types:["address"]});return M.addListener("place_changed",(function(){var I=M.getPlace();console.log(I),D.updatePlace(I)})),M.bindTo("bounds",D.map.instance),console.log(D.map.api.places),function(){M.unbindAll(),D.map.api.event.clearInstanceListeners(M)}}),[]),M.createElement("input",{type:"text",id:"pac-input",className:"controls",style:{width:"100%",height:"30px",padding:"5px",boxSizing:"border-box",marginBottom:"4px"},placeholder:"Enter a location",value:z,ref:g,onChange:function(M){return y(M.target.value)}})},e=function(N){var j=N.floorPlan,D=N.xdim,i=void 0===D?300:D,T=N.ydim,c=void 0===T?300:T,a=N.size,u=void 0===a?"large":a,e=N.getCalibrationData,t=M.useRef(null),l={small:23,medium:30,large:40},A={small:7.5,medium:9.5,large:12.4},n={small:21,medium:27,large:36};I((function(){var M=g.select(t.current);x(M)}),[]);var x=function(M){if(M.select("#A").empty()){var I=i/3,N=c/2;o(M.append("svg:image").attr("class","pointer").attr("data-id","A").attr("data-label","Marker A").attr("xlink:href",z).attr("height",l[u]).attr("x",I).attr("y",N).attr("id","A").style("cursor","pointer").style("transform","translate(-".concat(A[u],"px, -").concat(n[u],"px)")),M)}if(M.select("#B").empty()){var j=2*i/3,D=c/2;o(M.append("svg:image").attr("class","pointer").attr("data-id","B").attr("data-label","Marker B").attr("xlink:href",y).attr("height",l[u]).attr("x",j).attr("y",D).attr("id","B").style("cursor","pointer").style("transform","translate(-".concat(A[u],"px, -").concat(n[u],"px)")),M)}};function o(M,I){M.call(g.drag().on("start",(function(I){M.raise().classed("active",!0)})).on("drag",(function(I){var N=g.pointer(I,t.current);M.attr("x",N[0]).attr("y",N[1])})).on("end",(function(N){M.classed("active",!1),function(M){var I=[];M.selectAll(".pointer").each((function(M,N){var j=g.select(this).attr("x"),D=g.select(this).attr("y"),i=g.select(this).attr("data-id"),z=g.select(this).attr("data-label");I.push({id:i,label:z,coordinates:[Number(j),Number(D)]})})),I.sort((function(M,I){return M.id>I.id?1:-1})),e(I)}(I)})))}return M.createElement("div",{style:{width:i,height:c,margin:"2px",border:"1px solid black"}},M.createElement("svg",{ref:t,width:"100%",height:"100%",viewBox:"0 0 ".concat(i," ").concat(c),preserveAspectRatio:"xMinYMin",style:{backgroundImage:"url(".concat(j,")"),backgroundSize:"contain",backgroundRepeat:"round"}}))};!function(M,I){void 0===I&&(I={});var N=I.insertAt;if(M&&"undefined"!=typeof document){var j=document.head||document.getElementsByTagName("head")[0],D=document.createElement("style");D.type="text/css","top"===N&&j.firstChild?j.insertBefore(D,j.firstChild):j.appendChild(D),D.styleSheet?D.styleSheet.cssText=M:D.appendChild(document.createTextNode(M))}}(".pointer-label{\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    color: #000;\r\n    background-color: #fff;\r\n    border: 1px solid #000;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    width: 100px;\r\n    height: 20px;\r\n    position: absolute;\r\n    z-index: 100;\r\n    pointer-events: none;\r\n}");var t=function(N){var j=N.floorPlan,D=N.marker,i=void 0===D?c:D,z=N.xdim,y=void 0===z?300:z,T=N.ydim,a=void 0===T?300:T,u=N.size,e=void 0===u?"small":u,t=N.data,l=M.useRef(null);I((function(){var M=g.select(l.current);o(M)}),[]);var A={small:23,medium:30,large:40},n={small:7.5,medium:9.5,large:12.4},x={small:21,medium:27,large:36},o=function(M){t&&t.forEach((function(I,N){var j=M.append("g").attr("class","pointer").attr("data-id",I.id);j.append("svg:image").attr("xlink:href",i).attr("height",A[e]).attr("x",I.coordinates[0]-n[e]).attr("y",I.coordinates[1]-x[e]).attr("id",I.id.toString()),j.append("text").attr("x",I.coordinates[0]-n[e]).attr("y",I.coordinates[1]-x[e]-5).attr("id",I.id.toString()).attr("class","pointer-label").text(I.label||I.id)}))};return M.createElement("div",{style:{width:y,height:a}},M.createElement("svg",{ref:l,width:"100%",height:"100%",viewBox:"0 0 ".concat(y," ").concat(a),preserveAspectRatio:"xMinYMin",style:{border:"1px solid black",backgroundImage:"url(".concat(j,")"),backgroundSize:"contain",backgroundRepeat:"round"}}))},l=function(N){var j=N.center,g=N.zoom,i=void 0===g?11:g,z=N.getCurrentLocation,y=N.apiKey,c=N.height,a=void 0===c?400:c,u=N.width,e=void 0===u?400:u,t=N.showAddressInput,l=void 0===t||t,n=N.showCurrentLocation,x=void 0===n||n;I((function(){k()}),[]),I((function(){s&&(null==j?void 0:j.lat)!==(null==r?void 0:r.lat)&&(null==j?void 0:j.lng)!==(null==r?void 0:r.lng)&&(console.log("center changed",r,j),S(j))}),[j]);var o=M.useState(null),E=o[0],L=o[1],d=M.useState(j),r=d[0],S=d[1],m=M.useState(null),s=m[0],Z=m[1],C=M.useState(!0),O=C[0],Q=C[1];I((function(){r&&s&&z(r)}),[r]);var k=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(M){console.log(M),L({lat:M.coords.latitude,lng:M.coords.longitude})})):console.log("Geolocation is not supported by this browser.")};return M.createElement("div",{className:"gmap",style:{height:"".concat(a,"px"),width:"".concat(e,"px"),margin:"2px"}},l&&s&&M.createElement(A,{map:s,updatePlace:function(M){if(M.geometry){var I=M.geometry.location.lat(),N=M.geometry.location.lng();S({lat:I,lng:N})}}}),M.createElement("div",{style:{height:l?a-34:a,width:"".concat(e,"px"),border:"1px solid #ccc"}},E&&M.createElement("div",{style:{height:"100%",width:"100%"}},M.createElement(D,{bootstrapURLKeys:{key:y,libraries:["places"]},draggable:O,center:r||E,zoom:i,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(M){var I=M.map,N=M.maps,j=M.ref;Z({apiLoaded:!0,instance:I,api:N,ref:j})},onChange:function(M){var I=M.center;M.zoom,M.bounds,M.marginBounds,S(I)},options:{mapTypeControl:!0,controlSize:20},onChildMouseDown:function(M,I,N){Q(!1)},onChildMouseUp:function(M,I,N){Q(!0)},onChildClick:function(M,I){console.log("Child click ",M,I)},onChildMouseMove:function(M,I,N){}},x&&M.createElement((function(I){return I.lat,I.lng,M.createElement("img",{src:T,alt:"Current Location"})}),{lat:E.lat,lng:E.lng})))))},A=function(D){var g=N(null),i=j(""),z=i[0],y=i[1];return I((function(){var M=new D.map.api.places.Autocomplete(g.current,{types:["address"]});return M.addListener("place_changed",(function(){var I=M.getPlace();D.updatePlace(I)})),M.bindTo("bounds",D.map.instance),console.log(D.map.api.places),function(){M.unbindAll(),D.map.api.event.clearInstanceListeners(M)}}),[]),M.createElement("input",{type:"text",id:"pac-input",className:"controls",style:{width:"100%",height:"30px",padding:"5px",boxSizing:"border-box",marginBottom:"4px"},placeholder:"Enter a location",value:z,ref:g,onChange:function(M){return y(M.target.value)}})},n=function(M){return new Promise((function(I,N){var j=new Image;j.onload=function(){var M=j.naturalWidth,N=j.naturalHeight;I({width:M,height:N})},j.onerror=function(){N("There was some problem with the image.")},j.src=URL.createObjectURL(M)}))},x=function(M,I,N){return M.map((function(M){return M.map((function(M,j){return M*(N[j]/I[j])}))}))};export{e as CalibrateFloor,a as CalibrateMap,l as GoogleMap,t as ViewPlan,n as imageDimensions,x as transformCoordinates};
//# sourceMappingURL=index.js.map
