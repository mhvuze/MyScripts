import pathlib
import requests
from threading import Thread

base = "http://microsculpture.net/assets/img/tiles/"
m = "highres_paris_peacock" #;"highres_mantis_fly"
x = 1
d = 7

def part1():
    for no1 in range(1, 31):
        for no2 in range(1, 59):
            target_file = "{}{}/x{}/{}/{}/{}.jpg".format(base, m, x, d, no1, no2)
            target_path = "/{}/{}".format(m, no1)
            print(target_file)        
            pathlib.Path(target_path).mkdir(parents=True, exist_ok=True)
            f = open(target_path + "/{}.jpg".format(no2), "wb")
            f.write(requests.get(target_file).content)
            f.close()

def part2():
    for no1 in range(32, 59):
        for no2 in range(1, 59):
            target_file = "{}{}/x{}/{}/{}/{}.jpg".format(base, m, x, d, no1, no2)
            target_path = "/{}/{}".format(m, no1)
            print(target_file)        
            pathlib.Path(target_path).mkdir(parents=True, exist_ok=True)
            f = open(target_path + "/{}.jpg".format(no2), "wb")
            f.write(requests.get(target_file).content)
            f.close()

if __name__=="__main__":
    Thread(target = part1).start()
    Thread(target = part2).start()
