---
layout: post
title: "Set up your Ubuntu with ubuntuReady"
excerpt: "Along the years I had formatted my laptop several times and now I have built a tool for make this process easier and faster. All with just one shell script. In this post I show you how to do it."
categories: [Linux, Ubuntu]
author: Ulises Santana
comments: true
image:
  feature: https://ulisesantana.github.io/img/posts/2016/08/28/ubuntuReady.jpg
---

I am a dangerous guy with PCs. Until few months ago I used to format my laptop every 3 months because I broke it trying new stuff in Linux. It makes a total of 4 formats at year,** at least**. With every format I need to reinstall and reconfigure everything. So many times it became into my Saturday night plan. I'm a geek, this is the kind of things I do.

This *problem* started about 8 years ago and with the experience I finally have build a solution for all that Saturday nights wasted on reinstalling my laptop. A simple shell script.

Now I just need to install Ubuntu and run the script. It will install all I need in my laptop for development and daily stuff: Chrome, Clementine, Atom (*and all the plugins that I use in Atom*), Git, Gitkraken and lot of drivers and libraries for Ubuntu.

In [this Github repository](https://github.com/ulisesantana/ubuntuReady) you can fin my ubuntuReady script for Ubuntu and almost every Ubuntu based distros. If you trust me and want to run this script without read it you can just run this code below:

{% highlight bash %}
cd
wget https://raw.githubusercontent.com/ulisesantana/ubuntuReady/master/ubuntuReady.sh
sudo chmod +x ubuntuReady.sh
bash ubuntuReady.sh
rm ubuntuReady.sh
{% endhighlight %}

You just need accept some dialogs like Java and Wine installs, rest is automatic. On the other hand if you want to know the code I'm going to explain it. The script is divided in:

- Add the repositories
- Update the system and the repositories
- Install all the software
- Remove trash files

I code it in this way because is the most optimized way. PC adds all needed repositories, update it just one time and then start installing all the software.

## Add repositories & Installs

I divided in basic software, the repositories of software that every user will use, and software for development.

**Basic software is**:

- Nvidia graphics drivers
- Google Chrome
- Compression stuff
- Clementine
- Skype
- Royal Theme & Numix circle icons
- Unity Tweak Tool
- Slurm (*maybe is not for a basic user, but I found it very useful when I am using my smartphone as Access Point*)
- GIMP
- Basic packages

**Development software is**:

- Java 8 JDK
- Git
- Filezilla
- [Gitkraken](https://www.gitkraken.com/)
- [Atom](https://atom.io/) & Atom packages:
  - Emmet
  - Minimap
  - Atom Terminal
  - Atom Material Design Theme with dark syntax
  - Atom Beautify
  - Color Picker
  - File Icons
  - Atom Typescript plugin
- nvm (Node Version Manager)

Furthermore, in the development installing part I put a command for create an `apps` directory, which is the directory where I put all my projects folders. Anyway, you can enter in the [Github repository](https://github.com/ulisesantana/ubuntuReady) and read the `README.md` and how to configurate Unity Tweak Tool.

Once explained you can see here the full script:

{% highlight bash %}
#!/bin/bash
#ubuntuReady

#ADD ALL REPOSITORIES WE NEED

	##BASIC REPOSITORIES

	##GIMP
	sudo apt-add-repository ppa:otto-kesselgulasch/gimp -y

	##Nvidia Graphics Driver
	sudo add-apt-repository ppa:graphics-drivers/ppa -y

	##Google Chrome
	wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
	sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'

	##Ubuntu Restricted Extras
	sudo apt-add-repository ppa:mc3man/trusty-media -y
	sudo apt-add-repository ppa:gnome3-team/gnome3 -y

	##Clementine (Music Player)
	sudo add-apt-repository ppa:me-davidsansome/clementine -y

	##Skype
	sudo apt-add-repository "deb http://archive.canonical.com/ubuntu/ trusty partner" -y

	##Ubuntu optional packages
	sudo apt-add-repository ppa:maarten-baert/simplescreenrecorder -y

	##Numix Themes & Icons
	sudo add-apt-repository ppa:numix/ppa -y
	sudo add-apt-repository ppa:noobslab/themes -y


	##DEV STUFF REPOSITORIES

	##Java 8
	sudo add-apt-repository ppa:webupd8team/java -y

	##Git
	sudo add-apt-repository ppa:git-core/ppa -y

	##Gitkraken
	wget https://release.gitkraken.com/linux/gitkraken-amd64.deb

	##Atom
	wget https://github.com/atom/atom/releases/download/v1.9.8/atom-amd64.deb



#UPDATE THE SYSTEM
sudo apt-get update && sudo apt-get dist-upgrade -y


#INSTALL BASICS
	##Install Nvidia Graphics Driver
	sudo apt-get install nvidia-361 -y

	##Install Google Chrome
	sudo apt-get install google-chrome-stable -y

	##Fix chrome duplicate plank
	sudo sed -i "s/\/usr\/bin\/google-chrome-stable/\/usr\/bin\/google-chrome/g" /usr/share/applications/google-chrome.desktop
	sudo sed -i "s/StartupWMClass=Google-chrome-stable//g" /usr/share/applications/google-chrome.desktop

	##Install File Compression Libs
	sudo apt-get install unace unrar zip unzip xz-utils p7zip-full p7zip-rar sharutils rar uudeview mpack arj cabextract file-roller -y

	##Install Ubuntu Restricted Extras
	sudo apt-get install ubuntu-restricted-extras ubuntu-restricted-addons ffmpeg gstreamer0.10-plugins-ugly libavcodec-extra-54 libvdpau-va-gl1 libmad0 mpg321 gstreamer1.0-libav gdebi curl flashplugin-installer dconf-editor gnome-system-monitor -y

	##Install common repositories manager
	sudo apt-get install software-properties-common -y

	##Enable DVD Playback
	sudo /usr/share/doc/libdvdread4/install-css.sh

	##Install Clementine
	sudo apt-get install clementine -y

	##Install Skype
	sudo apt-get install skype -y
	sudo apt-get install gtk2-engines-murrine:i386 gtk2-engines-pixbuf:i386 -y

	##Install more packages
	sudo apt-get install aptitude apt-file qbittorrent quiterss dconf-editor gnome-system-monitor simplescreenrecorder quassel-qt4 bleachbit kid3-qt calibre pinta unetbootin gnome-disk-utility vlc browser-plugin-vlc build-essential jockey-gtk -y

	##Royal theme & Numix circle icons
	sudo apt-get install numix-icon-theme-circle -y
	sudo apt-get install numix-icon-theme numix-icon-theme-circle royal-gtk-theme

	##Install Unity Tweak Tool
	sudo apt-get install unity-tweak-tool -y

	##Install slurm (network traffic monitor)
	sudo apt-get install slurm -y

	##Install GIMP
	sudo apt-get install gimp -y


#INSTALL DEVELOPMENT STUFF
	##Install Java 8
	sudo apt-get install oracle-java8-installer -y

	##Install the latest git Version
	sudo apt-get install git -y

	##Install Filezilla
	sudo apt-get install filezilla -y

	##Install Gitkraken
	sudo dpkg -i gitkraken-amd64.deb
	rm gitkraken-amd64.deb

	##Install Atom
	sudo dpkg -i atom-amd64.deb
	rm atom-amd64.deb

	##Install Atom packages
	apm install emmet
	apm install minimap
	apm install atom-terminal
	apm install atom-material-ui
	apm install atom-material-syntax-dark
	apm install atom-beautify
	apm install color-picker
	apm install file-icons
	apm install atom-typescript

	##Install Node Version Manager
	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash

	##Create a $HOME/apps directory for projects
	mkdir apps

# AUTOREMOVE TRASH FILES
sudo apt-get autoremove -y

{% endhighlight %}

If you have any comment or idea you can write it below or add it in the [Github repository](https://github.com/ulisesantana/ubuntuReady).
