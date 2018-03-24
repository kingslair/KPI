#Installing VirtualBox
echo "Installing VirtualBox........................"
sudo apt-get install virtualbox

#Installing kubectl https://kubernetes.io/docs/getting-started-guides/kubectl/
echo "Installing kubectl..........................."
wget https://storage.googleapis.com/kubernetes-release/release/v1.4.4/bin/linux/amd64/kubectl
chmod +x kubectl
sudo mv kubectl /usr/local/bin/kubectl

#Installing minikube https://github.com/kubernetes/minikube/releases
echo "Installing minikube.........................."
curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.15.0/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/



#######################################################################################

minikube start

kubectl run hello-minikube --image=gcr.io/google_containers/echoserver:1.4 --port=8080
kubectl expose deployment hello-minikube --type=NodePort
kubectl get pod

sleep 30

kubectl get pod

curl $(minikube service hello-minikube --url)

sleep 60

minikube stop
