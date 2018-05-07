import json


def main(args):
    body = json.loads(args["body"])
    text = body.get("text", "NODATA")
    replyTo = body.get("replyTo", "DLQ")
    print("Got Message : %s, \n Reply Queue: %s \n" %
          (text, replyTo))
    r = {}
    r["result"] = text.split(",")
    r["replyTo"] = replyTo
    return r
