#!bin/sh

TITLE='wow'

cd ~/src/sandbox/sandbox
#hackmd-link /Users/richard/src/sandbox/sandbox/test >> test
TEMPLATE="$(cat test)"

# printf "$TEMPLATE"
ghi open "$TITLE" -m "$(printf '%s\n%s\n' "$TEMPLATE")"
