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

    private Vector3 startPosition;
	private Rigidbody rb;
	private Quaternion startRotation;

	private float antiRoll = 45000;


	// Use this for initialization
	void Start () {
		this.rb = GetComponent<Rigidbody>();
        this.startPosition = this.transform.position;
		this.startRotation = this.transform.rotation;

		
		this.rb.centerOfMass = this.transform.forward * 0.0125f;
	}
	
	// Update is called once per frame
	void Update () {
	}

	void FixedUpdate () {


		// Quick Reset For Car
		if(Input.GetKeyDown(KeyCode.U)) {
			this.transform.position = this.startPosition;
			this.transform.rotation = this.startRotation;
			this.rb.velocity = new Vector3(0,0,0);
		} 

		// All car movement
		this.wheels[2].motorTorque = maxTorque * Input.GetAxis("Vertical");
		this.wheels[3].motorTorque = maxTorque * Input.GetAxis("Vertical");

		this.wheels[0].steerAngle = steeringMod * Input.GetAxis("Horizontal");
		this.wheels[1].steerAngle = steeringMod * Input.GetAxis("Horizontal");

		this.wheels[2].brakeTorque = maxTorque * Input.GetAxis("Jump");
		this.wheels[3].brakeTorque = maxTorque * Input.GetAxis("Jump");


		WheelHit hit;

		//Front stabilizers
		float travelFL = 1.0f;
		float travelFR = 1.0f;

		bool groundedFL = this.wheels[1].GetGroundHit(out hit);
		if (groundedFL)
			travelFL = (-this.wheels[1].transform.InverseTransformPoint(hit.point).y - this.wheels[1].radius) / this.wheels[1].suspensionDistance;

		bool groundedFR = this.wheels[0].GetGroundHit(out hit);
		if (groundedFR)
			travelFR = (-this.wheels[0].transform.InverseTransformPoint(hit.point).y - this.wheels[0].radius) / this.wheels[0].suspensionDistance;
			
		float antiRollForceF = (travelFL - travelFR) * antiRoll;

		if (groundedFL)
			this.rb.AddForceAtPosition(this.wheels[1].transform.up * -antiRollForceF, this.wheels[1].transform.position);
			
		if (groundedFR)
			this.rb.AddForceAtPosition(this.wheels[0].transform.up * antiRollForceF, this.wheels[0].transform.position);

		//Back stabilizers
		float travelBL = 1.0f;
		float travelBR = 1.0f;

		bool groundedBL = this.wheels[3].GetGroundHit(out hit);
		if (groundedBL)
			travelBL = (-this.wheels[3].transform.InverseTransformPoint(hit.point).y - this.wheels[3].radius) / this.wheels[3].suspensionDistance;

		bool groundedBR = this.wheels[2].GetGroundHit(out hit);
		if (groundedBR)
			travelBR = (-this.wheels[2].transform.InverseTransformPoint(hit.point).y - this.wheels[2].radius) / this.wheels[2].suspensionDistance;

		float antiRollForceB = (travelBL - travelBR) * antiRoll;

		if (groundedBL)
			this.rb.AddForceAtPosition(this.wheels[3].transform.up * -antiRollForceB, this.wheels[3].transform.position);
			
		if (groundedBR)
			this.rb.AddForceAtPosition(this.wheels[2].transform.up * antiRollForceB, this.wheels[2].transform.position);
	}	
}