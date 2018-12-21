using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class PlayerController : MonoBehaviour {

	[SerializeField]
	private WheelCollider[] wheels;

	//Base mobility values
	[SerializeField]
	private float maxTorque = 20;
	[SerializeField]
	private float steeringMod = 10;

	[SerializeField]
	private float testYOffset = 0;
    private Vector3 startPosition;
	private Rigidbody rb;
	private Quaternion startRotation;


	// Use this for initialization
	void Start () {
		this.rb = GetComponent<Rigidbody>();
        this.startPosition = this.transform.position;
		this.startRotation = this.transform.rotation;
	}
	
	// Update is called once per frame
	void Update () {;
	}

	void FixedUpdate () {

		this.rb.centerOfMass = new Vector3(0, testYOffset, 0);

		if(Input.GetKeyDown(KeyCode.U)) {
			this.transform.position = this.startPosition;
			this.transform.rotation = this.startRotation;
		} 

		this.wheels[2].motorTorque = maxTorque * Input.GetAxis("Vertical");
		this.wheels[3].motorTorque = maxTorque * Input.GetAxis("Vertical");

        this.wheels[2].brakeTorque = maxTorque * Input.GetAxis("Jump") * 30;
        this.wheels[3].brakeTorque = maxTorque * Input.GetAxis("Jump") * 30;

        this.wheels[0].steerAngle = steeringMod * Input.GetAxis("Horizontal");
		this.wheels[1].steerAngle = steeringMod * Input.GetAxis("Horizontal");

		this.wheels[2].brakeTorque = maxTorque * Input.GetAxis("Jump");
		this.wheels[3].brakeTorque = maxTorque * Input.GetAxis("Jump");
	}
}
