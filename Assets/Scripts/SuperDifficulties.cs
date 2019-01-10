using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SuperDifficulties : MonoBehaviour
{

    public static float AmountPoints = 100;

    public void ButtonClicked(float AmountPoints)
    {
        SceneManager.LoadScene(1);
        SuperDifficulties.AmountPoints = AmountPoints;
    }
}