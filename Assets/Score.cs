using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Score : MonoBehaviour
{

    public Transform jeep;
    public Text scoreText;
    public float scoreInt;
    // Start is called before the first frame update
    private void Start()
    {

    }
    // Update is called once per frame
    void Update()
    {
        if (jeep.position.z >= 50 && jeep.position.z <= 62 && jeep.position.x >= 42 && jeep.position.x <=54)
        {
            Debug.Log("Xmin = 42, Xmax = 54, Zmin = 50, Zmax = 62");

            scoreInt = scoreInt + 1;

            scoreText.text = scoreInt.ToString();
            Debug.Log(scoreInt.ToString());
        }
    }
}