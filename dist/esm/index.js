import M,{useEffect as N,useRef as I,useState as j}from"react";import D from"google-map-react";import*as z from"d3";var g=function(){return g=Object.assign||function(M){for(var N,I=1,j=arguments.length;I<j;I++)for(var D in N=arguments[I])Object.prototype.hasOwnProperty.call(N,D)&&(M[D]=N[D]);return M},g.apply(this,arguments)},i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNyA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2ZfNF80KSI+DQo8ZWxsaXBzZSBjeD0iMTMuMTk1MSIgY3k9IjM4LjU2MSIgcng9IjQuMzkwMjQiIHJ5PSIyLjQzOTAyIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEyIi8+DQo8L2c+DQo8bWFzayBpZD0icGF0aC0yLW91dHNpZGUtMV80XzQiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNyIgaGVpZ2h0PSI0MCIgZmlsbD0iYmxhY2siPg0KPHJlY3QgZmlsbD0id2hpdGUiIHdpZHRoPSIyNyIgaGVpZ2h0PSI0MCIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4xOTUxIDM4LjA3MzJDMTIuNjU2MyAzOC4wNzMxIDEyLjIxOTUgMzcuNjM2NCAxMi4yMTk1IDM3LjA5NzZDMTIuMjE5NSAzMC4yOTYxIDguNDE0NTIgMjYuMTI4OSA1LjU2NTY4IDIzLjAwODlDNC43NDU0MiAyMi4xMTA1IDQuMDA0NDIgMjEuMjk5IDMuNDU2MzUgMjAuNTM2NEMxLjkxNDM4IDE4LjQ5NDEgMSAxNS45NTE0IDEgMTMuMTk1MUMxIDYuNDU5OTQgNi40NTk5NCAxIDEzLjE5NTEgMUMxOS45MzAzIDEgMjUuMzkwMiA2LjQ1OTk0IDI1LjM5MDIgMTMuMTk1MUMyNS4zOTAyIDE1Ljk1MjMgMjQuNDc1MiAxOC40OTU5IDIyLjkzMjMgMjAuNTM4NUMyMi4zODQzIDIxLjMwMDUgMjEuNjQ0IDIyLjExMTQgMjAuODI0NSAyMy4wMDg5QzE3Ljk3NTcgMjYuMTI4OSAxNC4xNzA3IDMwLjI5NjEgMTQuMTcwNyAzNy4wOTc2QzE0LjE3MDcgMzcuNjM2NCAxMy43MzM5IDM4LjA3MzEgMTMuMTk1MSAzOC4wNzMyIi8+DQo8L21hc2s+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE5NTEgMzguMDczMkMxMi42NTYzIDM4LjA3MzEgMTIuMjE5NSAzNy42MzY0IDEyLjIxOTUgMzcuMDk3NkMxMi4yMTk1IDMwLjI5NjEgOC40MTQ1MiAyNi4xMjg5IDUuNTY1NjggMjMuMDA4OUM0Ljc0NTQyIDIyLjExMDUgNC4wMDQ0MiAyMS4yOTkgMy40NTYzNSAyMC41MzY0QzEuOTE0MzggMTguNDk0MSAxIDE1Ljk1MTQgMSAxMy4xOTUxQzEgNi40NTk5NCA2LjQ1OTk0IDEgMTMuMTk1MSAxQzE5LjkzMDMgMSAyNS4zOTAyIDYuNDU5OTQgMjUuMzkwMiAxMy4xOTUxQzI1LjM5MDIgMTUuOTUyMyAyNC40NzUyIDE4LjQ5NTkgMjIuOTMyMyAyMC41Mzg1QzIyLjM4NDMgMjEuMzAwNSAyMS42NDQgMjIuMTExNCAyMC44MjQ1IDIzLjAwODlDMTcuOTc1NyAyNi4xMjg5IDE0LjE3MDcgMzAuMjk2MSAxNC4xNzA3IDM3LjA5NzZDMTQuMTcwNyAzNy42MzY0IDEzLjczMzkgMzguMDczMSAxMy4xOTUxIDM4LjA3MzIiIGZpbGw9IiNFQTM1MkIiLz4NCjxwYXRoIGQ9Ik0xMy4xOTUxIDM3LjU3MzJIMTMuMTk1MVYzOC41NzMySDEzLjE5NTFWMzcuNTczMlpNNS41NjU2OCAyMy4wMDg5TDQuODI3MjEgMjMuNjgzMkw0LjgyNzIxIDIzLjY4MzJMNS41NjU2OCAyMy4wMDg5Wk0zLjQ1NjM1IDIwLjUzNjRMNC4yNjgzOCAxOS45NTI4TDQuMjYxNTIgMTkuOTQzMkw0LjI1NDQyIDE5LjkzMzhMMy40NTYzNSAyMC41MzY0Wk0yMi45MzIzIDIwLjUzODVMMjIuMTM0MyAxOS45MzU4TDIyLjEyNzIgMTkuOTQ1MkwyMi4xMjA0IDE5Ljk1NDdMMjIuOTMyMyAyMC41Mzg1Wk0yMC44MjQ1IDIzLjAwODlMMjEuNTYzIDIzLjY4MzJMMjEuNTYzIDIzLjY4MzJMMjAuODI0NSAyMy4wMDg5Wk0xMS4yMTk1IDM3LjA5NzZDMTEuMjE5NSAzOC4xODg2IDEyLjEwNCAzOS4wNzMxIDEzLjE5NSAzOS4wNzMyTDEzLjE5NTEgMzcuMDczMkMxMy4xOTY2IDM3LjA3MzIgMTMuMjAwNiAzNy4wNzM3IDEzLjIwNDkgMzcuMDc1NUMxMy4yMDg2IDM3LjA3NyAxMy4yMTA5IDM3LjA3ODggMTMuMjEyNCAzNy4wODAzQzEzLjIxMzggMzcuMDgxOCAxMy4yMTU2IDM3LjA4NDEgMTMuMjE3MiAzNy4wODc4QzEzLjIxOSAzNy4wOTIxIDEzLjIxOTUgMzcuMDk2IDEzLjIxOTUgMzcuMDk3NkgxMS4yMTk1Wk00LjgyNzIxIDIzLjY4MzJDNy42ODAxNiAyNi44MDc3IDExLjIxOTUgMzAuNzE4MiAxMS4yMTk1IDM3LjA5NzZIMTMuMjE5NUMxMy4yMTk1IDI5Ljg3NDEgOS4xNDg4NyAyNS40NTAxIDYuMzA0MTYgMjIuMzM0Nkw0LjgyNzIxIDIzLjY4MzJaTTIuNjQ0MzEgMjEuMTJDMy4yMzM2NiAyMS45NCA0LjAxOTExIDIyLjc5ODEgNC44MjcyMSAyMy42ODMyTDYuMzA0MTYgMjIuMzM0NkM1LjQ3MTcyIDIxLjQyMjkgNC43NzUxOCAyMC42NTggNC4yNjgzOCAxOS45NTI4TDIuNjQ0MzEgMjEuMTJaTTAgMTMuMTk1MUMwIDE2LjE3NjMgMC45ODk4MDYgMTguOTI5MSAyLjY1ODI3IDIxLjEzODlMNC4yNTQ0MiAxOS45MzM4QzIuODM4OTUgMTguMDU5IDIgMTUuNzI2NSAyIDEzLjE5NTFIMFpNMTMuMTk1MSAwQzUuOTA3NjYgMCAwIDUuOTA3NjYgMCAxMy4xOTUxSDJDMiA3LjAxMjIzIDcuMDEyMjMgMiAxMy4xOTUxIDJWMFpNMjYuMzkwMiAxMy4xOTUxQzI2LjM5MDIgNS45MDc2NiAyMC40ODI2IDAgMTMuMTk1MSAwVjJDMTkuMzc4IDIgMjQuMzkwMiA3LjAxMjIzIDI0LjM5MDIgMTMuMTk1MUgyNi4zOTAyWk0yMy43MzAyIDIxLjE0MTNDMjUuMzk5NyAxOC45MzEgMjYuMzkwMiAxNi4xNzczIDI2LjM5MDIgMTMuMTk1MUgyNC4zOTAyQzI0LjM5MDIgMTUuNzI3NCAyMy41NTA3IDE4LjA2MDcgMjIuMTM0MyAxOS45MzU4TDIzLjczMDIgMjEuMTQxM1pNMjEuNTYzIDIzLjY4MzJDMjIuMzcwMyAyMi43OTg5IDIzLjE1NSAyMS45NDE2IDIzLjc0NDIgMjEuMTIyNEwyMi4xMjA0IDE5Ljk1NDdDMjEuNjEzNyAyMC42NTk0IDIwLjkxNzYgMjEuNDIzOCAyMC4wODYgMjIuMzM0NkwyMS41NjMgMjMuNjgzMlpNMTUuMTcwNyAzNy4wOTc2QzE1LjE3MDcgMzAuNzE4MiAxOC43MSAyNi44MDc3IDIxLjU2MyAyMy42ODMyTDIwLjA4NiAyMi4zMzQ2QzE3LjI0MTMgMjUuNDUwMSAxMy4xNzA3IDI5Ljg3NDEgMTMuMTcwNyAzNy4wOTc2SDE1LjE3MDdaTTEzLjE5NTIgMzkuMDczMkMxNC4yODYyIDM5LjA3MzEgMTUuMTcwNyAzOC4xODg2IDE1LjE3MDcgMzcuMDk3NkgxMy4xNzA3QzEzLjE3MDcgMzcuMDk2IDEzLjE3MTIgMzcuMDkyMSAxMy4xNzMgMzcuMDg3OEMxMy4xNzQ1IDM3LjA4NDEgMTMuMTc2MyAzNy4wODE4IDEzLjE3NzggMzcuMDgwM0MxMy4xNzkzIDM3LjA3ODggMTMuMTgxNiAzNy4wNzcgMTMuMTg1MyAzNy4wNzU1QzEzLjE4OTYgMzcuMDczNyAxMy4xOTM1IDM3LjA3MzIgMTMuMTk1MSAzNy4wNzMyTDEzLjE5NTIgMzkuMDczMloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl80XzQpIiBtYXNrPSJ1cmwoI3BhdGgtMi1vdXRzaWRlLTFfNF80KSIvPg0KPGNpcmNsZSBjeD0iMTMuMzA3NyIgY3k9IjEzLjMwNzciIHI9IjcuNjkyMzEiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNCIvPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfYl80XzQpIj4NCjxwYXRoIGQ9Ik05Ljg4NjM2IDE4SDguNDA5MDlMMTIuNjgxOCA2LjM2MzY0SDE0LjEzNjRMMTguNDA5MSAxOEgxNi45MzE4TDEzLjQ1NDUgOC4yMDQ1NUgxMy4zNjM2TDkuODg2MzYgMThaTTEwLjQzMTggMTMuNDU0NUgxNi4zODY0VjE0LjcwNDVIMTAuNDMxOFYxMy40NTQ1WiIgZmlsbD0id2hpdGUiLz4NCjwvZz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9mXzRfNCIgeD0iNi44MDQ5IiB5PSIzNC4xMjIiIHdpZHRoPSIxMi43ODA1IiBoZWlnaHQ9IjguODc4MDUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzRfNCIvPg0KPC9maWx0ZXI+DQo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2JfNF80IiB4PSI0LjQwOTA5IiB5PSIyLjM2MzY1IiB3aWR0aD0iMTgiIGhlaWdodD0iMTkuNjM2NCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPg0KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4NCjxmZUdhdXNzaWFuQmx1ciBpbj0iQmFja2dyb3VuZEltYWdlIiBzdGREZXZpYXRpb249IjIiLz4NCjxmZUNvbXBvc2l0ZSBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iaW4iIHJlc3VsdD0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1cl80XzQiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1cl80XzQiIHJlc3VsdD0ic2hhcGUiLz4NCjwvZmlsdGVyPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzRfNCIgeDE9IjEzLjE5NTEiIHkxPSIxIiB4Mj0iMTMuMTk1MSIgeTI9IjM4LjA3MzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuMzUiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==",T="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCAyNyA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2ZfNF8xNCkiPg0KPGVsbGlwc2UgY3g9IjEzLjE5NTIiIGN5PSIzOC41NjEiIHJ4PSI0LjM5MDI0IiByeT0iMi40MzkwMiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4xMiIvPg0KPC9nPg0KPG1hc2sgaWQ9InBhdGgtMi1vdXRzaWRlLTFfNF8xNCIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjI3IiBoZWlnaHQ9IjQwIiBmaWxsPSJibGFjayI+DQo8cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjI3IiBoZWlnaHQ9IjQwIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE5NDkgMzguMDczQzEyLjY1NjIgMzguMDcyOSAxMi4yMTk1IDM3LjYzNjEgMTIuMjE5NSAzNy4wOTc0QzEyLjIxOTUgMzAuMjk1OSA4LjQxNDUgMjYuMTI4NyA1LjU2NTY2IDIzLjAwODdDNC43NDY1NiAyMi4xMTE2IDQuMDA2NSAyMS4zMDExIDMuNDU4NjUgMjAuNTM5NEMxLjkxNTI5IDE4LjQ5NjYgMSAxNS45NTI4IDEgMTMuMTk1MUMxIDYuNDU5OTQgNi40NTk5NCAxIDEzLjE5NTEgMUMxOS45MzAzIDEgMjUuMzkwMyA2LjQ1OTk0IDI1LjM5MDMgMTMuMTk1MUMyNS4zOTAzIDE1Ljk1NjIgMjQuNDcyNyAxOC41MDI5IDIyLjkyNTggMjAuNTQ3MUMyMi4zNzg1IDIxLjMwNjUgMjEuNjQwNyAyMi4xMTQ2IDIwLjgyNDMgMjMuMDA4N0MxNy45NzU1IDI2LjEyODcgMTQuMTcwNSAzMC4yOTU5IDE0LjE3MDUgMzcuMDk3NEMxNC4xNzA1IDM3LjYzNjEgMTMuNzMzOCAzOC4wNzI5IDEzLjE5NTEgMzguMDczIi8+DQo8L21hc2s+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE5NDkgMzguMDczQzEyLjY1NjIgMzguMDcyOSAxMi4yMTk1IDM3LjYzNjEgMTIuMjE5NSAzNy4wOTc0QzEyLjIxOTUgMzAuMjk1OSA4LjQxNDUgMjYuMTI4NyA1LjU2NTY2IDIzLjAwODdDNC43NDY1NiAyMi4xMTE2IDQuMDA2NSAyMS4zMDExIDMuNDU4NjUgMjAuNTM5NEMxLjkxNTI5IDE4LjQ5NjYgMSAxNS45NTI4IDEgMTMuMTk1MUMxIDYuNDU5OTQgNi40NTk5NCAxIDEzLjE5NTEgMUMxOS45MzAzIDEgMjUuMzkwMyA2LjQ1OTk0IDI1LjM5MDMgMTMuMTk1MUMyNS4zOTAzIDE1Ljk1NjIgMjQuNDcyNyAxOC41MDI5IDIyLjkyNTggMjAuNTQ3MUMyMi4zNzg1IDIxLjMwNjUgMjEuNjQwNyAyMi4xMTQ2IDIwLjgyNDMgMjMuMDA4N0MxNy45NzU1IDI2LjEyODcgMTQuMTcwNSAzMC4yOTU5IDE0LjE3MDUgMzcuMDk3NEMxNC4xNzA1IDM3LjYzNjEgMTMuNzMzOCAzOC4wNzI5IDEzLjE5NTEgMzguMDczIiBmaWxsPSIjNDc0RUZGIi8+DQo8cGF0aCBkPSJNMTMuMTk1MSAzNy41NzNIMTMuMTk0OVYzOC41NzNIMTMuMTk1MVYzNy41NzNaTTUuNTY1NjYgMjMuMDA4N0w2LjMwNDE0IDIyLjMzNDRMNi4zMDQxNCAyMi4zMzQ0TDUuNTY1NjYgMjMuMDA4N1pNMy40NTg2NSAyMC41Mzk0TDQuMjcwNDcgMTkuOTU1NUw0LjI2MzYyIDE5Ljk0Nkw0LjI1NjU0IDE5LjkzNjZMMy40NTg2NSAyMC41Mzk0Wk0yMi45MjU4IDIwLjU0NzFMMjIuMTI4NCAxOS45NDM2TDIyLjEyMTQgMTkuOTUyOUwyMi4xMTQ2IDE5Ljk2MjRMMjIuOTI1OCAyMC41NDcxWk0yMC44MjQzIDIzLjAwODdMMjAuMDg1OCAyMi4zMzQ0TDIwLjgyNDMgMjMuMDA4N1pNMTEuMjE5NSAzNy4wOTc0QzExLjIxOTUgMzguMTg4MyAxMi4xMDM4IDM5LjA3MjggMTMuMTk0NyAzOS4wNzNMMTMuMTk1MSAzNy4wNzNDMTMuMTk2NiAzNy4wNzMgMTMuMjAwNiAzNy4wNzM1IDEzLjIwNDkgMzcuMDc1M0MxMy4yMDg1IDM3LjA3NjkgMTMuMjEwOSAzNy4wNzg3IDEzLjIxMjMgMzcuMDgwMUMxMy4yMTM4IDM3LjA4MTYgMTMuMjE1NiAzNy4wODM5IDEzLjIxNzIgMzcuMDg3NkMxMy4yMTkgMzcuMDkxOSAxMy4yMTk1IDM3LjA5NTkgMTMuMjE5NSAzNy4wOTc0SDExLjIxOTVaTTQuODI3MTkgMjMuNjgzQzcuNjgwMTQgMjYuODA3NSAxMS4yMTk1IDMwLjcxOCAxMS4yMTk1IDM3LjA5NzRIMTMuMjE5NUMxMy4yMTk1IDI5Ljg3MzkgOS4xNDg4NSAyNS40NDk5IDYuMzA0MTQgMjIuMzM0NEw0LjgyNzE5IDIzLjY4M1pNMi42NDY4NCAyMS4xMjM0QzMuMjM1ODUgMjEuOTQyMiA0LjAyMDIgMjIuNzk5MiA0LjgyNzE5IDIzLjY4M0w2LjMwNDE0IDIyLjMzNDRDNS40NzI5MiAyMS40MjQxIDQuNzc3MTUgMjAuNjYgNC4yNzA0NyAxOS45NTU1TDIuNjQ2ODQgMjEuMTIzNFpNMCAxMy4xOTUxQzAgMTYuMTc3NyAwLjk5MDc5NSAxOC45MzE4IDIuNjYwNzYgMjEuMTQyMkw0LjI1NjU0IDE5LjkzNjZDMi44Mzk3OSAxOC4wNjE0IDIgMTUuNzI3OCAyIDEzLjE5NTFIMFpNMTMuMTk1MSAwQzUuOTA3NjYgMCAwIDUuOTA3NjYgMCAxMy4xOTUxSDJDMiA3LjAxMjIzIDcuMDEyMjMgMiAxMy4xOTUxIDJWMFpNMjYuMzkwMyAxMy4xOTUxQzI2LjM5MDMgNS45MDc2NiAyMC40ODI2IDAgMTMuMTk1MSAwVjJDMTkuMzc4IDIgMjQuMzkwMyA3LjAxMjIzIDI0LjM5MDMgMTMuMTk1MUgyNi4zOTAzWk0yMy43MjMzIDIxLjE1MDVDMjUuMzk3IDE4LjkzODcgMjYuMzkwMyAxNi4xODE1IDI2LjM5MDMgMTMuMTk1MUgyNC4zOTAzQzI0LjM5MDMgMTUuNzMwOSAyMy41NDg0IDE4LjA2NzIgMjIuMTI4NCAxOS45NDM2TDIzLjcyMzMgMjEuMTUwNVpNMjEuNTYyOCAyMy42ODNDMjIuMzY3MiAyMi44MDIgMjMuMTQ4OSAyMS45NDc5IDIzLjczNzEgMjEuMTMxN0wyMi4xMTQ2IDE5Ljk2MjRDMjEuNjA4MSAyMC42NjUxIDIwLjkxNDIgMjEuNDI3MiAyMC4wODU4IDIyLjMzNDRMMjEuNTYyOCAyMy42ODNaTTE1LjE3MDUgMzcuMDk3NEMxNS4xNzA1IDMwLjcxOCAxOC43MDk4IDI2LjgwNzUgMjEuNTYyOCAyMy42ODNMMjAuMDg1OCAyMi4zMzQ0QzE3LjI0MTEgMjUuNDQ5OSAxMy4xNzA1IDI5Ljg3MzkgMTMuMTcwNSAzNy4wOTc0SDE1LjE3MDVaTTEzLjE5NTMgMzkuMDczQzE0LjI4NjIgMzkuMDcyOCAxNS4xNzA1IDM4LjE4ODMgMTUuMTcwNSAzNy4wOTc0SDEzLjE3MDVDMTMuMTcwNSAzNy4wOTU5IDEzLjE3MSAzNy4wOTE5IDEzLjE3MjggMzcuMDg3NkMxMy4xNzQ0IDM3LjA4MzkgMTMuMTc2MiAzNy4wODE2IDEzLjE3NzYgMzcuMDgwMUMxMy4xNzkxIDM3LjA3ODcgMTMuMTgxNCAzNy4wNzY5IDEzLjE4NTEgMzcuMDc1M0MxMy4xODk0IDM3LjA3MzUgMTMuMTkzNCAzNy4wNzMgMTMuMTk0OSAzNy4wNzNMMTMuMTk1MyAzOS4wNzNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNF8xNCkiIG1hc2s9InVybCgjcGF0aC0yLW91dHNpZGUtMV80XzE0KSIvPg0KPGNpcmNsZSBjeD0iMTMuMzA3NyIgY3k9IjEzLjMwNzciIHI9IjcuNjkyMzEiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNCIvPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfYl80XzE0KSI+DQo8cGF0aCBkPSJNOS40MDkwOSAxOVY3LjM2MzY0SDEzLjQ3NzNDMTQuMjg3OSA3LjM2MzY0IDE0Ljk1NjQgNy41MDM3OSAxNS40ODMgNy43ODQwOUMxNi4wMDk1IDguMDYwNjEgMTYuNDAxNSA4LjQzMzcxIDE2LjY1OTEgOC45MDM0MUMxNi45MTY3IDkuMzY5MzIgMTcuMDQ1NSA5Ljg4NjM2IDE3LjA0NTUgMTAuNDU0NUMxNy4wNDU1IDEwLjk1NDUgMTYuOTU2NCAxMS4zNjc0IDE2Ljc3ODQgMTEuNjkzMkMxNi42MDQyIDEyLjAxODkgMTYuMzczMSAxMi4yNzY1IDE2LjA4NTIgMTIuNDY1OUMxNS44MDExIDEyLjY1NTMgMTUuNDkyNCAxMi43OTU1IDE1LjE1OTEgMTIuODg2NFYxM0MxNS41MTUyIDEzLjAyMjcgMTUuODczMSAxMy4xNDc3IDE2LjIzMyAxMy4zNzVDMTYuNTkyOCAxMy42MDIzIDE2Ljg5MzkgMTMuOTI4IDE3LjEzNjQgMTQuMzUyM0MxNy4zNzg4IDE0Ljc3NjUgMTcuNSAxNS4yOTU1IDE3LjUgMTUuOTA5MUMxNy41IDE2LjQ5MjQgMTcuMzY3NCAxNy4wMTcgMTcuMTAyMyAxNy40ODNDMTYuODM3MSAxNy45NDg5IDE2LjQxODYgMTguMzE4MiAxNS44NDY2IDE4LjU5MDlDMTUuMjc0NiAxOC44NjM2IDE0LjUzMDMgMTkgMTMuNjEzNiAxOUg5LjQwOTA5Wk0xMC44MTgyIDE3Ljc1SDEzLjYxMzZDMTQuNTM0MSAxNy43NSAxNS4xODc1IDE3LjU3MiAxNS41NzM5IDE3LjIxNTlDMTUuOTY0IDE2Ljg1NjEgMTYuMTU5MSAxNi40MjA1IDE2LjE1OTEgMTUuOTA5MUMxNi4xNTkxIDE1LjUxNTIgMTYuMDU4NyAxNS4xNTE1IDE1Ljg1OCAxNC44MTgyQzE1LjY1NzIgMTQuNDgxMSAxNS4zNzEyIDE0LjIxMjEgMTUgMTQuMDExNEMxNC42Mjg4IDEzLjgwNjggMTQuMTg5NCAxMy43MDQ1IDEzLjY4MTggMTMuNzA0NUgxMC44MTgyVjE3Ljc1Wk0xMC44MTgyIDEyLjQ3NzNIMTMuNDMxOEMxMy44NTYxIDEyLjQ3NzMgMTQuMjM4NiAxMi4zOTM5IDE0LjU3OTUgMTIuMjI3M0MxNC45MjQyIDEyLjA2MDYgMTUuMTk3IDExLjgyNTggMTUuMzk3NyAxMS41MjI3QzE1LjYwMjMgMTEuMjE5NyAxNS43MDQ1IDEwLjg2MzYgMTUuNzA0NSAxMC40NTQ1QzE1LjcwNDUgOS45NDMxOCAxNS41MjY1IDkuNTA5NDcgMTUuMTcwNSA5LjE1MzQxQzE0LjgxNDQgOC43OTM1NiAxNC4yNSA4LjYxMzY0IDEzLjQ3NzMgOC42MTM2NEgxMC44MTgyVjEyLjQ3NzNaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9nPg0KPGRlZnM+DQo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfNF8xNCIgeD0iNi44MDQ5OSIgeT0iMzQuMTIyIiB3aWR0aD0iMTIuNzgwNSIgaGVpZ2h0PSI4Ljg3ODA1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl80XzE0Ii8+DQo8L2ZpbHRlcj4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjFfYl80XzE0IiB4PSI1LjQwOTA5IiB5PSIzLjM2MzY1IiB3aWR0aD0iMTYuMDkwOSIgaGVpZ2h0PSIxOS42MzY0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlR2F1c3NpYW5CbHVyIGluPSJCYWNrZ3JvdW5kSW1hZ2UiIHN0ZERldmlhdGlvbj0iMiIvPg0KPGZlQ29tcG9zaXRlIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJlZmZlY3QxX2JhY2tncm91bmRCbHVyXzRfMTQiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1cl80XzE0IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl80XzE0IiB4MT0iMTMuMTk1MSIgeTE9IjEiIHgyPSIxMy4xOTUxIiB5Mj0iMzguMDczIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjM1Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPC9kZWZzPg0KPC9zdmc+DQo=",y=function(I){var j=I.xdim,z=void 0===j?300:j,y=I.ydim,c=void 0===y?300:y,t=I.center,a=void 0===t?{lat:41.73284437919054,lng:-93.93040700837061}:t,e=I.zoom,x=void 0===e?20:e,l=I.getMapData,A=I.size,n=void 0===A?"medium":A,E=I.showAddressInput,L=void 0===E||E,o=I.apiKey,r={small:23,medium:30,large:40},d=M.useState(a),k=d[0],O=d[1],S=M.useState(x),m=S[0],s=S[1],Q=M.useState(null),w=Q[0],C=Q[1],U=M.useState({lat:k.lat- -227e-8,lng:k.lng-131e-6}),Z=U[0],Y=U[1],p=M.useState({lat:k.lat- -708e-8,lng:k.lng- -16e-5}),b=p[0],G=p[1];N((function(){w&&P(k.lat,k.lng).then((function(M){l({center:{lat:k.lat,lng:k.lng,address:M},zoom:m,markerA:Z,markerB:b})}))}),[k,Z,b,m]),N((function(){w&&a.lat!==k.lat&&a.lng!==k.lng&&(console.log("center changed",k,a),O(a))}),[a]);var W=M.useState(!0),v=W[0],h=W[1],P=function(M,N){var I=new w.api.Geocoder;return new Promise((function(j,D){var z="";I.geocode({location:{lat:M,lng:N}},(function(M,N){"OK"===N?(console.log(M),M[0]?(z=M[0].formatted_address,j(z)):j(z="No results found")):D(z="Geocoder failed due to: "+N)}))}))};return M.createElement("div",{style:{height:"100%",margin:"2px"}},L&&w&&M.createElement(u,{map:w,updatePlace:function(M){if(M.geometry){var N=M.geometry.location.lat(),I=M.geometry.location.lng();O({lat:N,lng:I})}}}),M.createElement("div",{style:{width:z,height:L?c-34:c,border:"1px solid black"}},M.createElement(D,{bootstrapURLKeys:{key:o,libraries:["places"]},draggable:v,center:k,zoom:m,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(M){var N=M.map,I=M.maps,j=M.ref;console.log(N,I,j),C({apiLoaded:!0,instance:N,api:I,ref:j})},onChange:function(M){var N=M.center,I=M.zoom,j=M.bounds,D=M.marginBounds;console.log(N,I,j,D),O(N),Y({lat:N.lat- -227e-8,lng:N.lng-131e-6}),G({lat:N.lat- -708e-8,lng:N.lng- -16e-5}),s(I)},options:{mapTypeControl:!0,controlSize:20},onChildMouseDown:function(M,N,I){h(!1)},onChildMouseUp:function(M,N,I){h(!0)},onChildClick:function(M,N){console.log("Child click ",M,N)},onChildMouseMove:function(M,N,I){"0"===M&&Y(g({lat:I.lat,lng:I.lng},I)),"1"===M&&G(g({lat:I.lat,lng:I.lng},I))}},M.createElement((function(N){return N.lat,N.lng,M.createElement("img",{src:i,style:{transform:"translate(-".concat(48,"%, -").concat(90,"%)")},height:r[n],alt:"Marker A"})}),{key:0,lat:Z.lat,lng:Z.lng}),M.createElement((function(N){return N.lat,N.lng,M.createElement("img",{src:T,style:{transform:"translate(-".concat(48,"%, -").concat(90,"%)")},height:r[n],alt:"Marker B"})}),{key:1,lat:b.lat,lng:b.lng}))))},u=function(D){var z=I(null),g=j(""),i=g[0],T=g[1];return N((function(){var M=new D.map.api.places.Autocomplete(z.current,{types:["address"]});return M.addListener("place_changed",(function(){var N=M.getPlace();console.log(N),D.updatePlace(N)})),M.bindTo("bounds",D.map.instance),console.log(D.map.api.places),function(){M.unbindAll(),D.map.api.event.clearInstanceListeners(M)}}),[]),M.createElement("input",{type:"text",id:"pac-input",className:"controls",style:{width:"100%",height:"30px",padding:"5px",boxSizing:"border-box",marginBottom:"4px"},placeholder:"Enter a location",value:i,ref:z,onChange:function(M){return T(M.target.value)}})},c=function(I){var j=I.floorPlan,D=I.xdim,g=void 0===D?300:D,y=I.ydim,u=void 0===y?300:y,c=I.size,t=void 0===c?"large":c,a=I.getCalibrationData,e=M.useRef(null),x={small:23,medium:30,large:40},l={small:7.5,medium:9.5,large:12.4},A={small:21,medium:27,large:36};N((function(){var M=z.select(e.current);n(M)}),[]);var n=function(M){if(M.select("#A").empty()){var N=g/3,I=u/2;E(M.append("svg:image").attr("class","pointer").attr("data-id","A").attr("data-label","Marker A").attr("xlink:href",i).attr("height",x[t]).attr("x",N).attr("y",I).attr("id","A").style("cursor","pointer").style("transform","translate(-".concat(l[t],"px, -").concat(A[t],"px)")),M)}if(M.select("#B").empty()){var j=2*g/3,D=u/2;E(M.append("svg:image").attr("class","pointer").attr("data-id","B").attr("data-label","Marker B").attr("xlink:href",T).attr("height",x[t]).attr("x",j).attr("y",D).attr("id","B").style("cursor","pointer").style("transform","translate(-".concat(l[t],"px, -").concat(A[t],"px)")),M)}};function E(M,N){M.call(z.drag().on("start",(function(N){M.raise().classed("active",!0)})).on("drag",(function(N){var I=z.pointer(N,e.current);M.attr("x",I[0]).attr("y",I[1])})).on("end",(function(I){M.classed("active",!1),function(M){var N=[];M.selectAll(".pointer").each((function(M,I){var j=z.select(this).attr("x"),D=z.select(this).attr("y"),g=z.select(this).attr("data-id"),i=z.select(this).attr("data-label");N.push({id:g,label:i,coordinates:[Number(j),Number(D)]})})),N.sort((function(M,N){return M.id>N.id?1:-1})),a(N)}(N)})))}return M.createElement("div",{style:{width:g,height:u,margin:"2px",border:"1px solid black"}},M.createElement("svg",{ref:e,width:"100%",height:"100%",viewBox:"0 0 ".concat(g," ").concat(u),preserveAspectRatio:"xMinYMin",style:{backgroundImage:"url(".concat(j,")"),backgroundSize:"contain",backgroundRepeat:"round"}}))};!function(M,N){void 0===N&&(N={});var I=N.insertAt;if(M&&"undefined"!=typeof document){var j=document.head||document.getElementsByTagName("head")[0],D=document.createElement("style");D.type="text/css","top"===I&&j.firstChild?j.insertBefore(D,j.firstChild):j.appendChild(D),D.styleSheet?D.styleSheet.cssText=M:D.appendChild(document.createTextNode(M))}}(".pointer-label{\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    color: #000;\r\n    background-color: #fff;\r\n    border: 1px solid #000;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    width: 100px;\r\n    height: 20px;\r\n    position: absolute;\r\n    z-index: 100;\r\n    pointer-events: none;\r\n}");var t=function(I){var j=I.floorPlan,D=I.marker,g=void 0===D?"./imgs/pointer.svg":D,i=I.xdim,T=void 0===i?300:i,y=I.ydim,u=void 0===y?300:y,c=I.size,t=void 0===c?"small":c,a=I.data,e=M.useRef(null);N((function(){var M=z.select(e.current);n(M)}),[]);var x={small:23,medium:30,large:40},l={small:7.5,medium:9.5,large:12.4},A={small:21,medium:27,large:36},n=function(M){a&&a.forEach((function(N,I){var j=M.append("g").attr("class","pointer").attr("data-id",N.id);j.append("svg:image").attr("xlink:href",g).attr("height",x[t]).attr("x",N.coordinates[0]-l[t]).attr("y",N.coordinates[1]-A[t]).attr("id",N.id.toString()),j.append("text").attr("x",N.coordinates[0]-l[t]).attr("y",N.coordinates[1]-A[t]-5).attr("id",N.id.toString()).attr("class","pointer-label").text(N.label||N.id)}))};return M.createElement("div",{style:{width:T,height:u}},M.createElement("svg",{ref:e,width:"100%",height:"100%",viewBox:"0 0 ".concat(T," ").concat(u),preserveAspectRatio:"xMinYMin",style:{border:"1px solid black",backgroundImage:"url(".concat(j,")"),backgroundSize:"contain"}}))},a=function(M){return new Promise((function(N,I){var j=new Image;j.onload=function(){var M=j.naturalWidth,I=j.naturalHeight;N({width:M,height:I})},j.onerror=function(){I("There was some problem with the image.")},j.src=URL.createObjectURL(M)}))};export{c as CalibrateFloor,y as CalibrateMap,t as ViewPlan,a as imageDimensions};
//# sourceMappingURL=index.js.map
