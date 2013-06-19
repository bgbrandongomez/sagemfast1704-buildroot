
TARGET=sagem_build

CC=gcc
CFLAGS=-c -Wall -I.

all: $(TARGET)

$(TARGET): sagem_build.o
	$(CC) -lz -lssl -o $@ $< /usr/lib/i386-linux-gnu/libz.a /usr/lib/i386-linux-gnu/libcrypto.a

%.o: %.c sagem_build.h
	$(CC) $(CFLAGS) -c -o $@ $< 

clean:
	rm -rf *.o *~ $(TARGET)
