using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Score : MonoBehaviour
{

    public Transform jeep;
    public Text scoreText;
    public float scoreInt;
    bool CHECKER = true;
    bool CHECKER2 = true;
    bool CHECKER3 = true;
    bool CHECKER4 = true;

    private void Start()
    {

    }

    void Update()
    {
        CheckPoint();
        //Debug.Log("Z" + jeep.position.z);
       // Debug.Log("X" + jeep.position.x);
    }

    public void CheckPoint()
    {
        if (jeep.position.z >= 50 && jeep.position.z <= 62 && jeep.position.x >= 42 && jeep.position.x <= 54 && CHECKER == true)
        {
            if(MakkelijkScript.MakkelijkClicked == true)
            {
                scoreInt = scoreInt + MakkelijkScript.MakkelijkPunten;
            } else if (NormaalScript.NormaalClicked == true)
            {
                scoreInt = scoreInt + NormaalScript.NormaalPunten;
            } else if (MoeilijkScript.MoeilijkClicked == true)
            {
                scoreInt = scoreInt + MoeilijkScript.MoeilijkPunten;
            }

            CHECKER = false;
            Debug.Log("SCORE" + scoreInt);
            scoreText.text = scoreInt.ToString();
            Debug.Log(scoreInt.ToString());

        }

        else if (jeep.position.z >= 193 && jeep.position.z <= 205 && jeep.position.x >= 408 && jeep.position.x <= 416 && CHECKER2 == true)
        {
            if (MakkelijkScript.MakkelijkClicked == true)
            {
                scoreInt = scoreInt + MakkelijkScript.MakkelijkPunten;
            }
            else if (NormaalScript.NormaalClicked == true)
            {
                scoreInt = scoreInt + NormaalScript.NormaalPunten;
            }
            else if (MoeilijkScript.MoeilijkClicked == true)
            {
                scoreInt = scoreInt + MoeilijkScript.MoeilijkPunten;
            }

            CHECKER = false;
            Debug.Log("SCORE" + scoreInt);
            scoreText.text = scoreInt.ToString();
            Debug.Log(scoreInt.ToString());
        }

        else if (jeep.position.z >= 240 && jeep.position.z <= 254 && jeep.position.x >= 160 && jeep.position.x <= 164 && CHECKER3 == true)
        {
            if (MakkelijkScript.MakkelijkClicked == true)
            {
                scoreInt = scoreInt + MakkelijkScript.MakkelijkPunten;
            }
            else if (NormaalScript.NormaalClicked == true)
            {
                scoreInt = scoreInt + NormaalScript.NormaalPunten;
            }
            else if (MoeilijkScript.MoeilijkClicked == true)
            {
                scoreInt = scoreInt + MoeilijkScript.MoeilijkPunten;
            }

            CHECKER = false;
            Debug.Log("SCORE" + scoreInt);
            scoreText.text = scoreInt.ToString();
            Debug.Log(scoreInt.ToString());
        }

        else if (jeep.position.z >= 373 && jeep.position.z <= 375 && jeep.position.x >= 354 && jeep.position.x <= 367 && CHECKER4 == true)
        {
            if (MakkelijkScript.MakkelijkClicked == true)
            {
                scoreInt = scoreInt + MakkelijkScript.MakkelijkPunten;
            }
            else if (NormaalScript.NormaalClicked == true)
            {
                scoreInt = scoreInt + NormaalScript.NormaalPunten;
            }
            else if (MoeilijkScript.MoeilijkClicked == true)
            {
                scoreInt = scoreInt + MoeilijkScript.MoeilijkPunten;
            }

            CHECKER = false;
            Debug.Log("SCORE" + scoreInt);
            scoreText.text = scoreInt.ToString();
            Debug.Log(scoreInt.ToString());
        }
    }
}