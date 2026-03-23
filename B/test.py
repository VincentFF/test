 #!/usr/bin/env python3

import http.server
import socketserver

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(b"Hello, World!")

with socketserver.TCPServer(("", 8000), MyHttpRequestHandler) as httpd:
    print("Serving at port 8000...")
    httpd.serve_forever()