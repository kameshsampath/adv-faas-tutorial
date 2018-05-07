package main

import (
	"encoding/json"
	"fmt"
	"os"
	"sort"
)

func main() {

	arg := os.Args[1]
	fmt.Printf("Req %+v \n", arg)

	type Request struct {
		ReplyTo string   `json:"replyTo"`
		Result  []string `json:"result"`
	}

	//parse request
	var req Request
	err := json.Unmarshal([]byte(arg), &req)

	if err != nil {
		fmt.Println("error:", err)
	}

	//sort
	s := req.Result
	sort.Strings(s)

	//rebuild response
	res := &Request{
		ReplyTo: req.ReplyTo,
		Result:  s,
	}
	resJSON, _ := json.Marshal(res)

	fmt.Println(string(resJSON))
}
