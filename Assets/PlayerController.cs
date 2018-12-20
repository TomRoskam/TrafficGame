using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour {

	[SerializeField]
	private WheelCollider[] wheels;

	//Base mobility values
	[SerializeField]
	private float maxTorque = 20;
	private float steeringMod = 10;


	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {;
	}

	void FixedUpdate () {
		this.wheels[2].motorTorque = maxTorque * Input.GetAxis("Vertical");
		this.wheels[3].motorTorque = maxTorque * Input.GetAxis("Vertical");

		this.wheels[0].steerAngle = steeringMod * Input.GetAxis("Horizontal");
		this.wheels[1].steerAngle = steeringMod * Input.GetAxis("Horizontal");
	}
}
